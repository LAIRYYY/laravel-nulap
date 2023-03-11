<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant_info extends Model
{
    use HasFactory;
    protected $table = 'applicant_info';
    protected $fillable = [
        'applicant_id',
    
        // add any other attributes you want to allow mass assignment for
    ];
    public $timestamps = false;
}
