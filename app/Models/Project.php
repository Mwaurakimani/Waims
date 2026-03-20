<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'location',
        'category',
        'manager_id',
        'contractor_id',
        'budget',
        'total_paid',
        'status',
        'is_disputed',
        'start_date',
        'estimated_end_date',
        'actual_completion_date',
    ];

    /**
     * Attributes to append to the model's array/JSON form for Inertia.
     */
    protected $appends = ['financial_progress_percentage'];

    protected $casts = [
        'start_date' => 'date',
        'estimated_end_date' => 'date',
        'actual_completion_date' => 'date',
    ];

    /**
     * Relationship: The Project Manager overseeing the project.
     */
    public function manager(): BelongsTo
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    /**
     * Relationship: The Contractor awarded the project.
     */
    public function contractor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'contractor_id');
    }

    /**
     * Relationship: Milestones for tracking work progress.
     */
    public function milestones(): HasMany
    {
        return $this->hasMany(Milestone::class);
    }

    /**
     * Relationship: Financial transactions related to this project.
     */
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    public function disputes()
    {
        return $this->hasManyThrough(Dispute::class, Milestone::class);
    }

    /**
     * Relationship: Reports filed by citizens.
     */
    //    public function reports(): HasMany
    //    {
    //        return $this->hasMany(CitizenReport::class);
    //    }

    /**
     * Virtual Attribute: Calculate financial progress for the React UI.
     */
    protected function financialProgressPercentage(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->budget > 0
                ? round(($this->total_paid / $this->budget) * 100, 2)
                : 0,
        );
    }

    /**
     * Scope: Filter projects that are currently active.
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}
