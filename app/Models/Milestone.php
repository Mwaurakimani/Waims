<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Milestone extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'project_id',
        'creator_id',
        'title',
        'description',
        'status',
        'start_date',
        'end_date',
        'completed_at',
        'files_url',
        'meta',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'files_url' => 'array',
        'meta' => 'array',
        'start_date' => 'date',
        'end_date' => 'date',
        'completed_at' => 'datetime',
    ];

    /**
     * Get the project that owns the milestone.
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * Get the user who created the milestone.
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function disputes() {
        return $this->hasMany(Dispute::class);
    }

    /**
     * Helper scope to get milestones with required data for the frontend.
     */
    public function scopeWithProjectDetails($query)
    {
        return $query->with(['creator:id,name,email']);
    }



}
