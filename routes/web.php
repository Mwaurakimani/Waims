<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
    //    'featuredProjects' => Project::where('status', 'active')->latest()->take(3)->get(),
    'featuredProjects' => [],
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
});

Route::get('/test', [TestController::class, 'index'])->name('test');

require __DIR__.'/settings.php';
require __DIR__.'/System/Users.php';
require __DIR__.'/System/Milestones.php';
require __DIR__.'/System/Projects.php';
require __DIR__.'/System/Transactions.php';
require __DIR__.'/System/Disputes.php';
