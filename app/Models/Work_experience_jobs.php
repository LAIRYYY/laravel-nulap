<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Work_experience_jobs extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'description',
        'job_id',
    ];
}
