<?php

namespace App\Http\Controllers;

use App\Models\Milestone;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MilestoneController extends Controller
{
    /**
     * Standard CRUD: Store a new milestone
     */
    public function store(Request $request, $projectId)
    {
        // 1. Validate the incoming request
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date', 'after_or_equal:start_date'],
            'files' => ['nullable', 'array'],
            'files.*' => ['file', 'mimes:pdf,doc,docx,jpg,png,zip', 'max:10240'], // 10MB limit per file
        ]);

        // 2. Find the project
        $project = Project::findOrFail($projectId);

        // 3. Create the milestone using validated data
        $milestone = $project->milestones()->create([
            'creator_id' => Auth::id(),
            'title' => $validated['title'],
            'description' => $validated['description'],
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'],
            'status' => 'pending',
            'files_url' => $this->handleFileUploads($request),
        ]);

        return back()->with('success', 'Milestone created successfully.');
    }

    /**
     * Standard CRUD: Update milestone details
     */
    public function update(Request $request, Milestone $milestone)
    {
        $milestone->update([
            'title' => $request->title,
            'description' => $request->description,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'files_url' => array_merge($milestone->files_url ?? [], $this->handleFileUploads($request)),
        ]);

        return back()->with('success', 'Milestone updated.');
    }

    /**
     * WORKFLOW: Mark as Complete (Contractor Action)
     * Contractor signals that work is done and ready for review.
     */
    public function markAsComplete(Milestone $milestone)
    {
        $milestone->update([
            'status' => 'completed',
            'completed_at' => now(),
            'meta' => array_merge($milestone->meta ?? [], ['completed_by' => Auth::id()]),
        ]);

        return back()->with('success', 'Milestone marked as complete. Awaiting manager approval.');
    }

    /**
     * WORKFLOW: Approve Completion (Manager Action)
     * Manager verifies the work is satisfactory.
     */
    public function approve(Milestone $milestone)
    {
        $milestone->update(['status' => 'approved']);

        // Logic to potentially release funds or trigger next project phase could go here.

        return back()->with('success', 'Milestone approved.');
    }

    /**
     * WORKFLOW: Reject Completion (Manager Action)
     * Manager sends the work back to the contractor for fixes.
     */
    public function reject(Request $request, Milestone $milestone)
    {
        $milestone->update([
            'status' => 'pending', // Revert to pending
            'meta' => array_merge($milestone->meta ?? [], [
                'rejection_reason' => $request->reason,
                'rejected_at' => now(),
            ]),
        ]);

        return back()->with('warning', 'Milestone rejected and returned for revision.');
    }

    /**
     * WORKFLOW: Dispute (Contractor, Manager, or Citizen Action)
     * Any party raises a concern about the milestone status or quality.
     */
    public function dispute(Request $request, Milestone $milestone)
    {
        $milestone->update([
            'status' => 'disputed',
            'meta' => array_merge($milestone->meta ?? [], [
                'dispute_reason' => $request->reason,
                'disputed_by' => Auth::id(),
                'disputed_at' => now(),
            ]),
        ]);

        return back()->with('error', 'Dispute raised. Admin intervention may be required.');
    }

    /**
     * WORKFLOW: Mark as Resolved (Admin Action)
     * Admin settles a dispute and moves the milestone to a new state.
     */
    public function resolve(Request $request, Milestone $milestone)
    {
        // Admin decides the final status (e.g., approved or pending)
        $milestone->update([
            'status' => $request->final_status,
            'meta' => array_merge($milestone->meta ?? [], [
                'resolution_notes' => $request->notes,
                'resolved_by' => Auth::id(),
                'resolved_at' => now(),
            ]),
        ]);

        return back()->with('success', 'Dispute resolved successfully.');
    }

    /**
     * SUBSCRIPTION: Subscribe to Project
     * Allow users (citizens/stakeholders) to follow project updates.
     */
    public function subscribe($projectId)
    {
        $user = Auth::user();

        // This assumes a 'subscriptions' table or a many-to-many relationship
        $user->subscribedProjects()->syncWithoutDetaching([$projectId]);

        return back()->with('success', 'You have subscribed to project updates.');
    }

    /**
     * SUBSCRIPTION: Unsubscribe
     */
    public function unsubscribe($projectId)
    {
        Auth::user()->subscribedProjects()->detach($projectId);

        return back()->with('info', 'Unsubscribed from project.');
    }

    /**
     * CRUD: Delete Milestone
     */
    public function destroy(Milestone $milestone)
    {
        $milestone->delete();

        return back()->with('success', 'Milestone deleted.');
    }

    /**
     * Private helper to process file uploads and return URLs
     */
    private function handleFileUploads(Request $request): array
    {
        $urls = [];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $path = $file->store('milestones/files', 'public');
                $urls[] = [
                    'name' => $file->getClientOriginalName(),
                    'url' => asset('storage/'.$path),
                    'uploaded_at' => now(),
                ];
            }
        }

        return $urls;
    }
}
