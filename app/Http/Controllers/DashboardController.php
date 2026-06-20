<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = Auth::user()->load('role');

        $data = [];

        switch ($user->role->name) {
            case 'Admin':
                $data = $this->getAdminDashboardData();
                break;
            case 'Moderator':
                $data = $this->getModeratorDashboardData();
                break;
            case 'Project Manager':
                $data = $this->getManagerDashboardData($user);
                break;
            case 'Contractor':
                $data = $this->getContractorDashboardData($user);
                break;
            case 'Citizen':
                $data = $this->getCitizenDashboardData();
                break;
        }

        return Inertia::render('dashboard', ['dashboard' => $data]);
    }

    private function getAdminDashboardData()
    {
        return [
            'stats' => [
                'total_projects' => Project::count(),
                'total_users' => User::count(),
                'total_budget' => Project::sum('budget'),
                'total_paid' => Project::sum('total_paid'),
            ],
            'projects_by_status' => Project::select('status', \DB::raw('count(*) as count'))->groupBy('status')->get(),
        ];
    }

    private function getModeratorDashboardData()
    {
        return [
            'managers' => User::whereHas('role', fn ($q) => $q->where('name', 'Project Manager'))
                ->withCount(['managedProjects as completed_projects' => fn ($q) => $q->where('status', 'completed')])
                ->with('managedProjects:id,title,status,manager_id')
                ->get(),
        ];
    }

    private function getManagerDashboardData(User $user)
    {
        return [
            'projects' => Project::where('manager_id', $user->id)
                ->with('contractor:id,name')
                ->select('id', 'title', 'status', 'budget', 'total_paid', 'contractor_id')
                ->get()
                ->map(function ($project) {
                    $project->progress = $project->budget > 0 ? round(($project->total_paid / $project->budget) * 100) : 0;
                    return $project;
                }),
        ];
    }

    private function getContractorDashboardData(User $user)
    {
        return [
            'open_projects' => Project::where('status', 'tendering')->get(['id', 'title', 'description', 'budget', 'estimated_end_date']),
            'my_projects' => Project::where('contractor_id', $user->id)->get(['id', 'title', 'status', 'budget', 'total_paid']),
        ];
    }

    private function getCitizenDashboardData()
    {
        return [
            'projects' => Project::whereIn('status', ['active', 'completed'])->with('manager:id,name')->latest()->take(10)->get(),
        ];
    }
}
