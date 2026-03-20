<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();

            // Basic Information
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('location'); // Could be a string or JSON for coordinates
            $table->string('category'); // e.g., Infrastructure, Health, Education

            // Workflow & Responsibility
            // manager_id: The Project Manager overseeing the project
            $table->foreignId('manager_id')->nullable()->constrained('users')->onDelete('set null');
            // contractor_id: The Contractor awarded the tender
            $table->foreignId('contractor_id')->nullable()->constrained('users')->onDelete('set null');

            // Financials
            $table->decimal('budget', 15, 2)->default(0.00);
            $table->decimal('total_paid', 15, 2)->default(0.00); // Tracks payment progress

            // Status Engine
            // default: pending (before PM is assigned or tender is listed)
            // options: pending, tendering, active, on_hold, completed, cancelled
            $table->string('status')->default('pending');
            $table->boolean('is_disputed')->default(false); // Quick flag for filtering

            // Timelines
            $table->date('start_date')->nullable();
            $table->date('estimated_end_date')->nullable();
            $table->date('actual_completion_date')->nullable();

            $table->timestamps();
            $table->softDeletes(); // For accountability, better to soft delete than hard delete
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
