<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'project_id',
        'user_id',
        'reference',
        'amount',
        'date',
        'status',
        'meta',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'amount' => 'decimal:2',
        'date' => 'date',
        'meta' => 'array',
    ];

    /**
     * Relationship: The project this transaction belongs to.
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * Relationship: The user who created/recorded this transaction.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Scope: Filter by released expenditures.
     */
    public function scopeReleased($query)
    {
        return $query->where('status', 'released');
    }

    /**
     * Scope: Filter by pending fund releases.
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending_release');
    }
}
