<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    // Ajout de medecin_id pour permettre l'enregistrement
    protected $fillable = ['patient_id', 'medecin_id', 'date_heure', 'motif', 'notes', 'statut'];

    /**
     * RELATION : Un rendez-vous appartient à un patient
     */
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    /**
     * RELATION : Le rendez-vous appartient à un médecin
     */
    public function medecin()
    {
        return $this->belongsTo(Medecin::class);
    }
}