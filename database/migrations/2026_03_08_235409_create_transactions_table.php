<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();

            // Foreign Keys
            $table->foreignId('project_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('restrict'); // Person who recorded it

            // Financial Data
            $table->string('reference'); // e.g., "Invoice #402" or "Phase 1 Materials"
            $table->decimal('amount', 15, 2); // Supports up to trillions
            $table->date('date'); // Transaction date

            // Workflow State
            // 'pending_release' = Requested but not yet spent
            // 'released' = Funds have left the account (Expenditure)
            $table->string('status')->default('released');

            // JSON Storage
            $table->json('meta')->nullable(); // For audit trails (IP, User Agent, etc.)

            $table->softDeletes();
            $table->timestamps();

            // Indexes
            $table->index('status');
            $table->index('date');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
