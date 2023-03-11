<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;

    protected $table = 'applicant';
    protected $fillable = [
        'full_name',
        'email'
        // add any other attributes you want to allow mass assignment for
    ];
    

}
