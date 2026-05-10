<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    /**
     * Les attributs qui peuvent être remplis en masse.
     * J'ai regroupé tes deux versions ici pour ne rien perdre.
     */
    protected $fillable = [
        'nom',
        'prenom',
        'nom_complet',
        'telephone',
        'email',
        'date_naissance',
        'antecedents_medicaux'
    ];
    public function appointments() {
    return $this->hasMany(Appointment::class);
}
}