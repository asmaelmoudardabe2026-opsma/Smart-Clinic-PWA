<?php

namespace App\Http\Controllers;

use App\Models\Medecin;
use Illuminate\Http\Request;

class MedecinController extends Controller
{
    // Afficher la liste des médecins
    public function index()
    {
        $medecins = Medecin::all();
        return view('medecins', compact('medecins'));
    }

    // Enregistrer un nouveau médecin
    public function store(Request $request)
    {
        Medecin::create([
            'nom' => $request->nom,
            'specialite' => $request->specialite,
            'telephone' => $request->telephone,
        ]);

        return redirect()->back()->with('success', 'Médecin ajouté avec succès !');
    }
}
