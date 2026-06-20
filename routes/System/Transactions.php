<?php

use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard/transactions/export', [TransactionController::class, 'export'])
        ->name('dashboard.transactions.export');

    Route::inertia('dashboard/transactions/create', 'Dashboard/User/UsersCreate')
        ->name('dashboard.transactions.create');

    Route::post('dashboard/transactions/create', [TransactionController::class, 'store'])
        ->name('dashboard.transactions.post');

    Route::get('dashboard/transactions', [TransactionController::class, 'index'])
        ->name('dashboard.transactions');

    Route::get('dashboard/transactions/{transaction}', [TransactionController::class, 'viewTransaction'])
        ->name('dashboard.transactions.viewTransaction');

    Route::get('dashboard/transactions/{transaction}/edit', [TransactionController::class, 'editTransaction'])
        ->name('dashboard.transactions.editTransaction');

    Route::patch('dashboard/transactions/{transaction}/update', [TransactionController::class, 'updateTransaction'])
        ->name('dashboard.transactions.updateTransaction');

});
