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
    // On récupère tous les patients de la base de données
    $patients = Patient::all(); 
    
    // On les envoie à la vue 'patients'
    return view('patients', compact('patients'));
}

    /**
     * Enregistre un nouveau patient dans la base de données.
     */
    public function store(Request $request)
{
    // 1. Validation (indispensable pour le prof !)
    $request->validate([
        'nom' => 'required|string|max:255',
        'prenom' => 'required|string|max:255',
        'email' => 'required|email|unique:patients',
    ]);

    // 2. Création du patient
    Patient::create($request->all());

    // 3. Retour à la page avec un message de succès
    return redirect()->back()->with('status', 'Patient ajouté avec succès !');
}
}