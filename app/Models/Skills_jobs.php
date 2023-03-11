<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skills_jobs extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'title',
        'job_id',
    ];
}
