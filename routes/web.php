<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\AppointmentController;

Route::get('/', function () { return view('welcome'); });

// Routes Patients
Route::get('/liste-patients', [PatientController::class, 'index']);
Route::post('/ajouter-patient', [PatientController::class, 'store']);

// Routes Rendez-vous
Route::get('/rendez-vous', [AppointmentController::class, 'index']);
Route::post('/ajouter-rdv', [AppointmentController::class, 'store']);
Route::delete('/supprimer-rdv/{id}', [AppointmentController::class, 'destroy']);
Route::get('/modifier-rdv/{id}', [AppointmentController::class, 'edit']);
Route::put('/modifier-rdv/{id}', [AppointmentController::class, 'update']);