<?php

use App\Http\Controllers\MilestoneController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    // Milestone Management
    Route::post('dashboard/milestones/project/{project}', [MilestoneController::class, 'store'])
        ->name('dashboard.milestone.store');

    Route::put('dashboard/milestones/{milestone}', [MilestoneController::class, 'update'])
        ->name('dashboard.milestone.update');

    Route::delete('dashboard/milestones/{milestone}', [MilestoneController::class, 'destroy'])
        ->name('dashboard.milestone.destroy');

    // Workflow Actions
    Route::post('dashboard/milestones/{milestone}/complete', [MilestoneController::class, 'markAsComplete'])
        ->name('dashboard.milestone.complete');

    Route::post('dashboard/milestones/{milestone}/approve', [MilestoneController::class, 'approve'])
        ->name('dashboard.milestone.approve');

    Route::post('dashboard/milestones/{milestone}/reject', [MilestoneController::class, 'reject'])
        ->name('dashboard.milestone.reject');

    Route::post('dashboard/milestones/{milestone}/dispute', [MilestoneController::class, 'dispute'])
        ->name('dashboard.milestone.dispute');

    Route::post('dashboard/milestones/{milestone}/resolve', [MilestoneController::class, 'resolve'])
        ->name('dashboard.milestone.resolve');

});
