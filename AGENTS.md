# AGENTS.md

## Architecture Overview
This is a Laravel 12 application with Inertia.js + React frontend for project management. Core entities: Projects (managed by Project Managers, executed by Contractors), Milestones (payment stages), Transactions (financial records), Disputes (conflict resolution). Users have roles: Admin(1), Moderator(2), Project Manager(3), Citizen(4), Contractor(5).

## Key Patterns
- **Inertia Responses**: Controllers return `inertia('Page/Component', data)` with paginated/structured data for React components in `resources/js/pages/`.
- **Role-Based Access**: Filter users by `role_id` (e.g., managers: `User::where('role_id', 3)`).
- **Financial Tracking**: Projects track `budget` and `total_paid`; milestones control fund releases.
- **Soft Deletes**: Projects use `SoftDeletes` for audit trails.
- **Form Generation**: Use Wayfinder (`@laravel/vite-plugin-wayfinder`) for auto-generated forms; run `herd php artisan wayfinder:generate` after schema changes.
- **Model Appends**: Computed attributes like `financial_progress_percentage` appended to Project model for frontend display.

## Developer Workflows
- **Setup**: Run `composer run setup` (installs deps, copies .env, generates key, migrates, npm install).
- **Development**: `npm run dev` for Vite hot reload; use Herd for PHP server.
- **Testing**: `pest` for tests (Unit/Feature dirs); uses in-memory SQLite.
- **Code Style**: `composer run pint` (Laravel preset); `npm run format` (Prettier + TailwindCSS plugin) for JS/TS.
- **Linting**: `npm run lint` (ESLint with React/TypeScript rules).
- **Type Checking**: `npm run types:check` (TypeScript).
- **Debugging**: Laravel Debugbar enabled in dev; check `storage/logs/laravel.log`.

## Conventions
- **Routes**: Organized in `routes/System/` subfiles (e.g., `routes/System/Projects.php`).
- **Controllers**: In `app/Http/Controllers/`; use form requests for validation (e.g., `ProjectCreationRequest`).
- **Migrations**: Dated filenames; use foreign keys with `constrained()` and `onDelete('set null')`.
- **Seeders**: Check existence before creating (e.g., `Role::where('name', $role['name'])->exists()`).
- **Frontend Components**: Use Radix UI primitives in `resources/js/components/`; TailwindCSS v4 for styling.
- **State Management**: Inertia handles server state; use React hooks for local state.

## Integration Points
- **Authentication**: Laravel Fortify with 2FA; Sanctum for API if needed.
- **Database**: SQLite for dev/testing; migrations assume nullable foreign keys for flexibility.
- **Build**: Vite with SSR support (`npm run build:ssr`); refresh watches `resources/`, `routes/`, `app/Http/Controllers/`.

Reference: `app/Models/Project.php` (relationships), `routes/System/Projects.php` (CRUD + funds/milestones), `resources/js/pages/Dashboard/Projects/` (React views).</content>
<parameter name="filePath">C:\Users\kimmw\Herd\global-project\AGENTS.md
