<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ProjectCreationRequest extends FormRequest
{
    /**
     * Only allow Admins or authorized Project Admins to initiate projects.
     */
    public function authorize(): bool
    {
        // Adjust role_id check based on your Admin ID (usually 1)
        return Auth::check() && (Auth::user()->role_id === 1 || Auth::user()->role_id === 2);
    }

    /**
     * Validation rules for project initiation.
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255', 'unique:projects,title'],
            'description' => ['required', 'string', 'min:5'],
            'location' => ['required', 'string', 'max:255'],
            'category' => ['required', 'string', 'in:infrastructure,health,education,water'],
            'budget' => ['required', 'numeric', 'min:0'],
            'estimated_end_date' => ['required', 'date', 'after:today'],
            'manager_id' => ['sometimes', 'exists:users,id'], // Must be a valid User ID
        ];
    }

    /**
     * Custom messages for better UX in your React/Inertia frontend.
     */
    public function messages(): array
    {
        return [
            'manager_id.exists' => 'The selected project manager does not exist in our records.',
            'estimated_end_date.after' => 'The completion date must be a future date.',
            'category.in' => 'Please select a valid sector from the provided list.',
        ];
    }
}
