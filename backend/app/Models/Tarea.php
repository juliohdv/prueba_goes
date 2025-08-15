<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    //
    protected $fillable = [
        'title', 'description', 'status'
    ];
}
