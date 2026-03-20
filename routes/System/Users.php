<?php

use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::inertia('dashboard/users/create', 'Dashboard/User/UsersCreate')
        ->name('dashboard.users.create');

    Route::post('dashboard/users/create', [UsersController::class, 'store'])
        ->name('dashboard.users.post');

    Route::get('dashboard/users', [UsersController::class, 'index'])
        ->name('dashboard.users');

    Route::get('dashboard/users/{id}', [UsersController::class, 'viewUser'])
        ->name('dashboard.users.viewUser');

    Route::get('dashboard/users/{id}/edit', [UsersController::class, 'editUser'])
        ->name('dashboard.users.editUser');

});
