<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class TransactionController extends Controller
{
    /**
     * Display a listing of transactions.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('Dashboard/Transactions/List', [
            'transactions' => Transaction::query()
                ->with(['project:id,title', 'user:id,name']) // Eager load relationships
                ->when($request->search, function ($query, $search) {
                    $query->where('reference', 'like', "%{$search}%");
                })
                ->when($request->status, fn ($query, $status) => $query->where('status', $status))
                ->latest()
                ->paginate(10)
                ->withQueryString(),
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    /**
     * Store a newly created transaction.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'reference' => 'required|string|max:100',
            'amount' => 'required|numeric|min:0',
            'date' => 'required|date',
            'status' => 'required|in:pending_release,released,cancelled',
            'meta' => 'nullable|array',
        ]);

        // Automatically assign the current user as the one recording the transaction
        Auth::user()->transactions()->create($validated);

        return redirect()->route('dashboard.transactions')->with('success', 'Transaction recorded.');
    }

    /**
     * Update an existing transaction.
     */
    public function update(Request $request, Transaction $transaction): RedirectResponse
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'reference' => 'required|string|max:100',
            'amount' => 'required|numeric|min:0',
            'date' => 'required|date',
            'status' => 'required|in:pending_release,released,cancelled',
            'meta' => 'nullable|array',
        ]);

        $transaction->update($validated);

        return redirect()->back()->with('success', 'Transaction updated.');
    }

    /**
     * Remove the transaction (Soft Delete).
     */
    public function destroy(Transaction $transaction): RedirectResponse
    {
        $transaction->delete();

        return redirect()->route('dashboard.transactions')->with('success', 'Transaction deleted.');
    }

    /**
     * View specific transaction details (Inertia modal or page).
     */
    public function viewTransaction(Transaction $transaction): Response
    {
        $transaction->load([
            'user:id,name',
            'project.manager:id,name,email',
            'project.contractor:id,name,email',
            'project.transactions', // To calculate stats
        ]);

        // Simple stats calculation
        $project = $transaction->project;
        $totalSpent = $project->transactions()->where('status', 'released')->sum('amount');
        $budget = $project->budget ?? 0; // Assuming budget exists on project

        return Inertia::render('Dashboard/Transactions/Show', [
            'transaction' => $transaction,
            'stats' => [
                'total_spent' => $totalSpent,
                'budget' => $budget,
                'remaining' => $budget - $totalSpent,
                'burn_percentage' => $budget > 0 ? round(($totalSpent / $budget) * 100) : 0,
            ],
        ]);
    }

    /**
     * Show the form for editing the transaction status.
     */
    public function editTransaction(Transaction $transaction): Response
    {
        return Inertia::render('Dashboard/Transactions/Edit', [
            'transaction' => $transaction->load(['project:id,title', 'user:id,name']),
        ]);
    }

    /**
     * Update the status of a transaction.
     */
    public function updateTransaction(Request $request, Transaction $transaction): RedirectResponse
    {
        // Validate only the status field
        $validated = $request->validate([
            'status' => 'required|in:pending_release,released,cancelled',
        ]);

        // Update only the status to maintain audit integrity of other fields
        $transaction->update($validated);

        return redirect()->route('dashboard.transactions')->with('success', 'Transaction status updated.');
    }

    /**
     * Export transactions to a CSV file.
     */
    public function export(): StreamedResponse
    {
        return new StreamedResponse(function () {
            $handle = fopen('php://output', 'w');

            // Add CSV headers
            fputcsv($handle, [
                'Transaction ID',
                'Date',
                'Reference',
                'Project Title',
                'Project Manager',
                'Project Contractor',
                'Amount',
                'Currency',
                'Status',
                'Recorded By',
                'Created At',
            ]);

            // Fetch and stream transactions
            Transaction::with(['project.manager', 'project.contractor', 'user'])->chunk(200, function ($transactions) use ($handle) {
                foreach ($transactions as $transaction) {
                    fputcsv($handle, [
                        $transaction->id,
                        $transaction->date,
                        $transaction->reference,
                        $transaction->project->title ?? 'N/A',
                        $transaction->project->manager->name ?? 'N/A',
                        $transaction->project->contractor->name ?? 'N/A',
                        $transaction->amount,
                        'KES', // Assuming KES, can be made dynamic
                        ucfirst(str_replace('_', ' ', $transaction->status)),
                        $transaction->user->name ?? 'N/A',
                        $transaction->created_at->toDateTimeString(),
                    ]);
                }
            });

            fclose($handle);
        }, 200, [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="transactions_'.date('Y-m-d_H-i-s').'.csv"',
        ]);
    }
}
