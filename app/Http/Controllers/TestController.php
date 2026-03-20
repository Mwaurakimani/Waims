<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Test', [
            'user' => auth()->user(),
        ]);
    }
}
