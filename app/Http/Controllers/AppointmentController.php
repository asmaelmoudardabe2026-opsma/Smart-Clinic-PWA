<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Models\Patient;

class AppointmentController extends Controller
{
    // 1. Liste des rendez-vous
    public function index()
    {
        $appointments = Appointment::with('patient')->get();
        $patients = Patient::all();
        return view('appointments', compact('appointments', 'patients'));
    }

    // 2. Enregistrement d'un nouveau RDV
    public function store(Request $request)
    {
        $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'date_heure' => 'required|after:now',
            'motif' => 'required|string|min:5',
        ]);

        Appointment::create($request->all());
        return redirect()->back()->with('success', 'Rendez-vous ajouté avec succès !');
    }

    // 3. Affichage du formulaire de modification
    public function edit($id)
    {
        $appointment = Appointment::findOrFail($id);
        $patients = Patient::all();
        return view('edit_appointment', compact('appointment', 'patients'));
    }

    // 4. Mise à jour des données modifiées
    public function update(Request $request, $id)
    {
        $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'date_heure' => 'required|after:now',
            'motif' => 'required|string|min:5',
        ]);

        $appointment = Appointment::findOrFail($id);
        $appointment->update($request->all());

        return redirect('/rendez-vous')->with('success', 'Rendez-vous mis à jour avec succès !');
    }

    // 5. Suppression
    public function destroy($id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->delete();
        return redirect()->back()->with('success', 'Rendez-vous annulé.');
    }
}