<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function getAllUsers()
    {
        return response()->json([
            'message' => 'All users',
            'users' => User::all()
        ]);
    }
}
