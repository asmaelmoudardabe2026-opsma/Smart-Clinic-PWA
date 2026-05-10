@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="text-primary"><i class="fas fa-calendar-check"></i> Gestion des Rendez-vous - Smart Clinic</h2>
    </div>

    @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    @endif

    <div class="row">
        <!-- 1. Formulaire de prise de RDV (Gauche) -->
        <div class="col-md-5">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Fixer un nouveau RDV</h5>
                </div>
                <div class="card-body">
                    <form action="{{ route('appointments.store') }}" method="POST">
                        @csrf
                        
                        <!-- Sélection du Patient -->
                        <div class="mb-3">
                            <label class="form-label font-weight-bold">Patient</label>
                            <select name="patient_id" class="form-select @error('patient_id') is-invalid @enderror" required>
                                <option value="">Choisir un patient...</option>
                                @foreach($patients as $patient)
                                    <option value="{{ $patient->id }}">{{ $patient->nom }} {{ $patient->prenom }}</option>
                                @endforeach
                            </select>
                        </div>

                        <!-- Sélection du Médecin -->
                        <div class="mb-3">
                            <label class="form-label font-weight-bold">Médecin</label>
                            <select name="medecin_id" class="form-select @error('medecin_id') is-invalid @enderror" required>
                                <option value="">Choisir un médecin...</option>
                                @foreach($medecins as $medecin)
                                    <option value="{{ $medecin->id }}">{{ $medecin->nom }} {{ $medecin->prenom }}</option>
                                @endforeach
                            </select>
                        </div>

                        <!-- Date et Heure -->
                        <div class="mb-3">
                            <label class="form-label font-weight-bold">Date et Heure</label>
                            <input type="datetime-local" name="date_heure" class="form-control @error('date_heure') is-invalid @enderror" required>
                        </div>

                        <!-- Motif -->
                        <div class="mb-3">
                            <label class="form-label font-weight-bold">Motif de consultation</label>
                            <input type="text" name="motif" class="form-control" placeholder="Ex: Consultation générale" required>
                        </div>

                        <!-- Notes (Optionnel) -->
                        <div class="mb-3">
                            <label class="form-label font-weight-bold">Notes (Optionnel)</label>
                            <textarea name="notes" class="form-control" rows="2"></textarea>
                        </div>

                        <button type="submit" class="btn btn-success w-100">Confirmer le Rendez-vous</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- 2. Liste des Rendez-vous (Droite) -->
        <div class="col-md-7">
            <div class="card shadow-sm">
                <div class="card-header bg-dark text-white">
                    <h5 class="mb-0">Planning des consultations</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Patient / Médecin</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{-- Si tu as une variable $appointments --}}
                                @isset($appointments)
                                    @foreach($appointments as $appointment)
                                    <tr>
                                        <td>{{ \Carbon\Carbon::parse($appointment->date_heure)->format('d/m/Y H:i') }}</td>
                                        <td>
                                            <span class="text-primary">{{ $appointment->patient->nom }}</span><br>
                                            <small class="text-muted">Dr. {{ $appointment->medecin->nom }}</small>
                                        </td>
                                        <td>
                                            <span class="badge bg-{{ $appointment->statut == 'en_attente' ? 'warning' : 'success' }}">
                                                {{ ucfirst($appointment->statut) }}
                                            </span>
                                        </td>
                                    </tr>
                                    @endforeach
                                @else
                                    <tr>
                                        <td colspan="3" class="text-center text-muted italic">Chargez les rendez-vous dans le contrôleur pour les voir ici.</td>
                                    </tr>
                                @endisset
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection