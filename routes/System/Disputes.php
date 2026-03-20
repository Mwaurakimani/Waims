<?php

use App\Http\Controllers\DisputeController;

Route::middleware(['auth'])->group(function () {
    // Standard Resource Routes
    Route::get('dashboard/disputes', [DisputeController::class, 'index'])
        ->name('dashboard.disputes.index');

    Route::get('dashboard/disputes/create', [DisputeController::class, 'create'])
        ->name('dashboard.disputes.create');

    Route::get('dashboard/disputes/{milestone}', [DisputeController::class, 'show'])
        ->name('dashboard.disputes.show');

    Route::post('dashboard/disputes', [DisputeController::class, 'store'])
        ->name('dashboard.disputes.store');

    Route::delete('dashboard/disputes/{dispute}', [DisputeController::class, 'destroy'])
        ->name('dashboard.disputes.destroy');

    // Custom Status Update Route
    Route::patch('dashboard/disputes/{dispute}/status', [DisputeController::class, 'updateStatus'])
        ->name('dashboard.disputes.updateStatus');
});

