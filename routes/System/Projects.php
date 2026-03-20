<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard/project', [ProjectController::class, 'index'])
        ->name('dashboard.projects');

    Route::get('dashboard/projects/create', [ProjectController::class, 'create'])
        ->name('dashboard.project.create');

    Route::post('dashboard/projects/create', [ProjectController::class, 'store'])
        ->name('dashboard.project.post');

    Route::get('dashboard/projects/{id}', [ProjectController::class, 'show'])
        ->name('dashboard.project.viewProject');

    Route::get('dashboard/projects/{id}/update', [ProjectController::class, 'update'])
        ->name('dashboard.project.updateProject');

    Route::put('dashboard/projects/{id}/edit', [ProjectController::class, 'edit'])
        ->name('dashboard.project.editProject');

    Route::delete('dashboard/projects/{id}/delete', [ProjectController::class, 'destroy'])
        ->name('dashboard.project.destroy');

    Route::post('dashboard/projects/{id}/releaseFunds', [ProjectController::class, 'releaseFunds'])
        ->name('dashboard.project.releaseFunds');

    Route::post('dashboard/projects/{id}/updateMilestone', [ProjectController::class, 'updateMilestone'])
        ->name('dashboard.project.updateMilestone');

    Route::post('dashboard/projects/{id}/assignTeam', [ProjectController::class, 'assignTeam'])
        ->name('dashboard.project.assignTeam');



});
