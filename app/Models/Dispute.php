<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Dispute extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'milestone_id',
        'raised_by',
        'resolved_by',
        'subject',
        'message',
        'contact_info',
        'status',
        'resolved_at',
        'resolution'
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'resolved_at' => 'datetime',
        'created_at' => 'datetime',
    ];

    /**
     * Relationship: The milestone being disputed.
     */
    public function milestone(): BelongsTo
    {
        return $this->belongsTo(Milestone::class);
    }

    /**
     * Relationship: The user who raised the dispute.
     */
    public function raiser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'raised_by');
    }

    /**
     * Relationship: The user who resolved/handled the dispute.
     */
    public function resolver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'resolved_by');
    }

    /**
     * Helper: Check if the dispute is resolved.
     */
    public function isResolved(): bool
    {
        return $this->status === 'resolved';
    }
}
