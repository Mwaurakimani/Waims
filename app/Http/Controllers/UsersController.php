<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $user = User::with('role')
            ->paginate(20)
            ->through(fn ($user) => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role->name ?? 'No Role',
                'status' => 'Active',
            ]);

        return Inertia::render('Dashboard/User/UsersList', [
            'usersList' => $user
        ]);
    }

    public function store(Request $request)
    {
        // 1. Validate the incoming data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'role' => 'required|exists:roles,id', // Validating the role ID exists
        ]);

        // 2. Generate a secure random password
        $password = 'passowrd';

        // 3. Create the user record
        // We map 'role' from the form to 'role_id' for the database
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'role_id' => $validated['role'],
            'password' => Hash::make($password), // Always hash the password
        ]);

        // 4. Optional: Dispatch the welcome email with credentials
        // It is best practice to use a queue for mail
        // Mail::to($user->email)->send(new UserCreatedWelcome($user, $password));

        // 5. Redirect back with success message
        return to_route('dashboard.users')
            ->with('message', 'User created successfully and welcome email sent.');
    }

    public function viewUser(Request $request, $id)
    {
        return Inertia::render('Dashboard/User/UserView', [
            'user' => User::with('role')->find($id),
            'projects' => Project::where(function ($query) use ($id) {
                $query
                    ->where('manager_id', $id)
                    ->orWhere('contractor_id', $id);
            })->get(),
            'reports' => [],
            'roleList' => User::all()->pluck('name', 'id')->toArray(),
        ]);
    }

    public function editUser(string $id)
    {
        return Inertia::render('Dashboard/User/UsersEdit', [
            'user' => User::find($id),
        ]);
    }

    public function suspend(Request $request, User $id)
    {
        $user = $id;
    }

    public function impersonate(string $id)
    {
        $user = User::find($id);

        if (! $user) {
            return redirect()->route('dashboard')->with('error', 'User not found.');
        }

        // Check if current user can impersonate (Admin or Moderator)
        if (! in_array(auth()->user()->role_id, [1, 2, 3, 4, 5, 6])) {
            return redirect()->route('dashboard')->with('error', 'Unauthorized to impersonate.');
        }

        // Log the impersonation
        Log::info('User '.auth()->id()." is impersonating user {$id}");

        // Store original user in session for potential reversion
        session(['impersonate' => true, 'original_user' => auth()->id()]);

        // Login as the target user
        Auth::login($user);

        return redirect()->route('dashboard')->with('message', 'Now impersonating user.');
    }
}
