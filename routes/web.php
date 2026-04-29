<?php

use Illuminate\Support\Facades\Route;
// On place tous les imports en haut
use App\Http\Controllers\PatientController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\MedecinController;

Route::get('/', function () {
    return view('welcome');
});

// --- Routes Patients ---
Route::post('/ajouter-patient', [PatientController::class, 'store']);

// --- Routes Rendez-vous ---
Route::get('/rendez-vous', [AppointmentController::class, 'index']);
Route::post('/ajouter-rdv', [AppointmentController::class, 'store']);
Route::delete('/supprimer-rdv/{id}', [AppointmentController::class, 'destroy']);
Route::get('/modifier-rdv/{id}', [AppointmentController::class, 'edit']);
Route::put('/modifier-rdv/{id}', [AppointmentController::class, 'update']);

// --- Routes Médecins ---
// Affiche la page avec la liste
Route::get('/medecins', [MedecinController::class, 'index']);
// Enregistre un nouveau médecin via le formulaire
Route::post('/ajouter-medecin', [MedecinController::class, 'store']);