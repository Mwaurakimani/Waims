<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'Admin'],
            ['name' => 'Moderator'],
            ['name' => 'Project Manager'],
            ['name' => 'Contractor'],
            ['name' => 'Citizen'],
        ];

        // create the roles
        foreach ($roles as $role) {
            if (Role::where('name', $role['name'])->exists()) {
                continue;
            }
            Role::create($role);
        }

    }
}
