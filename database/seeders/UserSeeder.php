<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'admin',
                'email' => 'admin@email.com',
                'password' => 'password',
                'role_id' => 1,
            ],
            [
                'name' => 'moderator',
                'email' => 'moderator@email.com',
                'password' => 'password',
                'role_id' => 2,
            ],
            [
                'name' => 'manager',
                'email' => 'manager@email.com',
                'password' => 'password',
                'role_id' => 3,
            ],
            [
                'name' => 'citizen',
                'email' => 'citizen@email.com',
                'password' => 'password',
                'role_id' => 4,
            ],
            [
                'name' => 'contractor',
                'email' => 'contractor@email.com',
                'password' => 'password',
                'role_id' => 5,
            ],
        ];
        foreach ($users as $user) {
            if (!User::where('email', $user['email'])->exists()) {
                User::create([
                    'name' => $user['name'],
                    'email' => $user['email'],
                    'password' => Hash::make($user['password']),
                    'role_id' => $user['role_id'],
                ]);
            }
        }
    }
}
