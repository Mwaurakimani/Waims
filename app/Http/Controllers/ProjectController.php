<?php

namespace App\Http\Controllers;

use App\Http\Requests\AssignTeamRequest;
use App\Http\Requests\ProjectCreationRequest;
use App\Http\Requests\ReleaseFundsRequest;
use App\Http\Requests\UpdateMilestoneRequest;
use App\Models\Milestone;
use App\Models\Project;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    //
    public function index()
    {
        return inertia('Dashboard/Projects/index', [
            'projects' => Project::with(['manager', 'contractor'])
                ->paginate(20)
                ->through(fn ($project) => [
                    'id' => $project->id,
                    'title' => $project->title,
                    'location' => $project->location,
                    'manager' => $project->manager->name ?? 'Unassigned',
                    'contractor' => $project->contractor->name ?? 'Unassigned',
                    'budget' => number_format($project->budget, 2),
                    'status' => ucfirst($project->status),
                    'progress' => $project->financial_progress_percentage, // From your model's append
                    'manager_id' => $project->manager_id,
                    'contractor_id' => $project->contractor_id,
                    'created_at' => $project->created_at->format('M d, Y'),
                    'estimated_end_date' => $project->estimated_end_date->format('M d, Y'),
                    'actual_completion_date' => $project->actual_completion_date ?
                        $project->actual_completion_date->format('M d, Y') :
                        'N/A',
                ]),
        ]);
    }

    public function create()
    {
        return inertia('Dashboard/Projects/create', [
            'managers' => User::where('role_id', 3)->get()->pluck('name', 'id'),
            'contractors' => User::where('role_id', 5)->get()->pluck('name', 'id'),
        ]);
    }

    public function store(ProjectCreationRequest $request)
    {
        // The validated data is automatically available via $request->validated()
        $validated = $request->validated();

        // Create the project using mass assignment
        Project::create($validated);

        // Redirect back to the projects list with a success message
        return to_route('dashboard.projects')
            ->with('message', 'Project created successfully.');
    }

    public function show(Request $request, $id)
    {
        return inertia('Dashboard/Projects/show', [
            'project' => Project::with(['manager', 'contractor'])->find($id),
            'milestones' => Milestone::where('project_id', $id)->get(),
            'transactions' => Transaction::where('project_id', $id)->get(),
            'notifications' => [],
            'managers' => User::where('role_id', 3)->get()->pluck('name', 'id'),
            'contractors' => User::where('role_id', 5)->get()->pluck('name', 'id'),
        ]);
    }

    public function update() {}

    public function destroy() {}

    public function edit(string $id) {}

    public function releaseFunds(Request $request, $id)
    {
        // Use a DB transaction to ensure atomicity
        return DB::transaction(function () use ($request, $id) {
            $project = Project::findOrFail($id);

            // 1. Create the expenditure record
            $transaction = Transaction::create([
                'project_id' => $project->id,
                'reference' => $request->reference,
                'amount' => $request->amount,
                'date' => $request->date,
                'status' => 'released', // Automatically marked as released as it represents spent funds
                'user_id' => auth()->id(),
            ]);

            // 2. Update Project Totals
            // Increment the 'spent' column on the project model
            $project->increment('total_paid', $request->amount);

            return back()->with('success', 'Expenditure recorded and project budget updated.');
        });
    }

    public function updateMilestone(UpdateMilestoneRequest $request, $id) {}

    public function assignTeam(AssignTeamRequest $request, $id)
    {
        $project = Project::findOrFail($id);

        // Get only the validated data
        $data = $request->validated();

        // Prepare the update array
        $updateData = [];

        // Logic: If the value is '0' or null, we might want to set it to null in the DB
        // If it's a valid ID, we update it.
        if ($request->has('manager_id')) {
            $updateData['manager_id'] = ($data['manager_id'] == 0) ? null : $data['manager_id'];
        }

        if ($request->has('contractor_id')) {
            $updateData['contractor_id'] = ($data['contractor_id'] == 0) ? null : $data['contractor_id'];
        }

        // Perform the update
        $project->update($updateData);

        return back()->with('success', 'Team assignments updated successfully.');
    }
}
