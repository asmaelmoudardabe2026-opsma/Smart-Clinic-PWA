<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\Medecin;
use App\Models\Appointment;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // On compte les données pour les afficher sur le Dashboard
        $totalPatients = Patient::count();
        $totalMedecins = Medecin::count();
        $totalRDV = Appointment::count();

        // On récupère les 5 derniers rendez-vous avec les noms des patients et médecins
        $recentAppointments = Appointment::with(['patient', 'medecin'])
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        return view('dashboard', compact('totalPatients', 'totalMedecins', 'totalRDV', 'recentAppointments'));
    }
}