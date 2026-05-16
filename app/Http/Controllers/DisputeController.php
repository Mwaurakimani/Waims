<?php

namespace App\Http\Controllers;

use App\Models\Dispute;
use App\Models\Milestone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DisputeController extends Controller
{
    /**
     * List all disputes (with project context via milestone).
     */
    public function index(Request $request)
    {
        return Inertia::render('Dashboard/Disputes/List', [
            'disputes' => Dispute::with(['milestone.project', 'raiser:id,name'])
                ->when($request->search, function ($query, $search) {
                    $query->where('subject', 'like', "%{$search}%");
                })
                ->latest()
                ->paginate(10)
                ->withQueryString(),

            // ADD THIS LINE
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    /**
     * Store a new dispute raised by a user.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'milestone_id' => 'required|exists:milestones,id',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'contact_info' => 'required|string|max:255',
        ]);

        // Automatically set the raiser as the logged-in user
        $validated['raised_by'] = Auth::id();
        $validated['status'] = 'open';

        Dispute::create($validated);

        return redirect()
            ->route('dashboard.disputes.index')
            ->with('success', 'Dispute raised successfully.');
    }

    /**
     * Show specific dispute details.
     */
    public function show(Request $request, $dispute)
    {
        $dispute = Dispute::find($dispute);
        return Inertia::render('Dashboard/Disputes/Show', [
            'dispute' => $dispute->load([
                'milestone.project',
                'raiser:id,name,email',
                'resolver:id,name,email'
            ]),
        ]);
    }


    /**
     * Dedicated method to update status and assign a resolver.
     */
// app/Http/Controllers/DisputeController.php

    public function updateStatus(Request $request, Dispute $dispute)
    {
        // 1. Prevent updates if already closed
        if (in_array($dispute->status, ['resolved', 'dismissed'])) {
            return back()->with('error', 'This dispute is already closed and cannot be modified.');
        }

        // 2. Validate status and resolution
        $validated = $request->validate([
            'status' => 'required|in:open,in_review,resolved,dismissed',
            'resolution' => 'required_if:status,resolved,dismissed|nullable|string|min:10',
        ]);

        // 3. Update the record
        $dispute->update([
            'status' => $validated['status'],
            'resolution' => $validated['resolution'],
            'resolved_by' => auth()->id(),
            'resolved_at' => in_array($validated['status'], ['resolved', 'dismissed']) ? now() : null,
        ]);

        return back()->with('success', 'Dispute updated successfully.');
    }


    /**
     * Remove the dispute record.
     */
    public function destroy(Dispute $dispute)
    {
        $dispute->delete();

        return redirect()->route('dashboard.disputes.index')->with('success', 'Dispute removed.');
    }

    public function create(Request $request)
    {
        return Inertia::render('Dashboard/Disputes/Create', [
            'selectedMilestone' => Milestone::find($request->input('milestone')),
        ]);
    }
}
