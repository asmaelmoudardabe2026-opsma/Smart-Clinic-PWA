<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Medecin extends Model
{
    // On autorise Laravel à remplir ces colonnes
    protected $fillable = ['nom', 'specialite', 'telephone'];

    /**
     * RELATION : Un médecin possède plusieurs rendez-vous
     * C'est ici qu'on définit le "1..*" de ton diagramme
     */
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}