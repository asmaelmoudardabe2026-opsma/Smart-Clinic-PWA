<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use App\Models\Medecin;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Affiche la page des rendez-vous avec les listes nécessaires.
     */
    public function index()
    {
        // On récupère tout pour remplir la page
        $patients = Patient::all();
        $medecins = Medecin::all();
        
        // On récupère les RDV avec leurs relations pour éviter les erreurs dans le tableau
        $appointments = Appointment::with(['patient', 'medecin'])->orderBy('date_heure', 'asc')->get();

        return view('rdv', compact('patients', 'medecins', 'appointments'));
    }

    /**
     * Enregistre un nouveau rendez-vous.
     */
    public function store(Request $request)
    {
        // 1. Validation (La partie "Sécurité" pour ton PFE)
        $validated = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'medecin_id' => 'required|exists:medecins,id',
            'date_heure' => 'required|date|after:now',
            'motif'      => 'required|string|max:255',
            'notes'      => 'nullable|string',
        ]);

        // 2. Création en base de données
        // Grâce au $fillable que tu as corrigé, medecin_id sera bien enregistré
        Appointment::create($validated);

        // 3. Redirection avec message de succès
        return redirect()->route('appointments.index')->with('success', 'Rendez-vous enregistré avec succès !');
    }

    /**
     * Supprimer un rendez-vous (Optionnel, mais bien pour le CRUD)
     */
    public function destroy($id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->delete();

        return redirect()->back()->with('success', 'Rendez-vous annulé.');
    }
}