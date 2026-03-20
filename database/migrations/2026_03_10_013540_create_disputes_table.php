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
        Schema::create('disputes', function (Blueprint $table) {
            $table->id();

            // Relationships
            $table->foreignId('milestone_id')->constrained()->cascadeOnDelete();
            $table->foreignId('raised_by')->constrained('users'); // The person opening the dispute
            $table->foreignId('resolved_by')->nullable()->constrained('users'); // Person who handles it

            // Descriptive Content
            $table->string('subject');
            $table->text('message');

            // Follow-up Contact Info (Optional: allows for phone/email specifically for this case)
            $table->string('contact_info')->nullable();

            // Tracking Status
            $table->enum('status', ['open', 'in_review', 'resolved', 'dismissed'])->default('open');
            $table->timestamp('resolved_at')->nullable();
            $table->text('resolution')->nullable();

            $table->softDeletes(); // For audit purposes
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disputes');
    }
};
