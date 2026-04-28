<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; // Cette ligne est indispensable !
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom_complet', 
        'telephone', 
        'date_naissance', 
        'antecedents_medicaux'
    ];
}