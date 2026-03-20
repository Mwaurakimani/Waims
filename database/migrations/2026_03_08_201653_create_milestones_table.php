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
        Schema::create('milestones', function (Blueprint $table) {
            $table->id();

            // Foreign Key Constraints
            $table->foreignId('project_id')->constrained()->onDelete('cascade');
            $table->foreignId('creator_id')->constrained('users')->onDelete('restrict');

            // Core Information
            $table->string('title');
            $table->text('description')->nullable();

            // Status and Workflow
            // Using string for flexibility (pending, completed, disputed, approved)
            $table->string('status')->default('pending');

            // Chronological Data
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->timestamp('completed_at')->nullable();

            // JSON Storage
            $table->json('files_url')->nullable()->comment('Stores array of file URLs and metadata');
            $table->json('meta')->nullable()->comment('Unstructured data for logs or custom attributes');

            // Housekeeping
            $table->softDeletes();
            $table->timestamps();

            // Indexes for performance
            $table->index('status');
            $table->index(['project_id', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('milestones');
    }
};
