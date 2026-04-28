<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Affiche la liste des patients.
     */
    public function index()
    {
        $patients = Patient::all();
        return view('patients', compact('patients'));
    }

    /**
     * Enregistre un nouveau patient dans la base de données.
     */
    public function store(Request $request)
    {
        // 1. Validation des données
        $request->validate([
            'nom_complet' => 'required|string|max:255',
            'telephone' => 'required|string|max:20',
            'date_naissance' => 'required|date',
        ]);

        // 2. Création du patient
        Patient::create([
            'nom_complet' => $request->nom_complet,
            'telephone' => $request->telephone,
            'date_naissance' => $request->date_naissance,
            'antecedents_medicaux' => $request->antecedents_medicaux,
        ]);

        // 3. Retour à la page avec un message de succès
        return redirect()->back()->with('success', 'Le patient a été ajouté avec succès !');
    }
}