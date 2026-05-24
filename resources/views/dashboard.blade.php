@extends('layouts.app')

@section('content')
<div class="container mt-4">
    <h2 class="mb-4 text-primary">Tableau de Bord - Smart Clinic</h2>
    
    <div class="row mb-4">
        <div class="col-md-4">
            <div class="card bg-primary text-white shadow border-0 p-3">
                <h3>{{ $totalPatients }}</h3>
                <p>Total Patients</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-success text-white shadow border-0 p-3">
                <h3>{{ $totalMedecins }}</h3>
                <p>Médecins Actifs</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-info text-white shadow border-0 p-3">
                <h3>{{ $totalRDV }}</h3>
                <p>Total Rendez-vous</p>
            </div>
        </div>
    </div>

    <div class="card shadow border-0">
        <div class="card-header bg-dark text-white">Dernières Activités</div>
        <div class="card-body">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Médecin</th>
                        <th>Motif</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($recentAppointments as $rdv)
                    <tr>
                        <td>{{ $rdv->patient?->nom ?? 'Inconnu' }}</td>
                        <td>Dr. {{ $rdv->medecin?->nom ?? 'Non assigné' }}</td>
                        <td>{{ $rdv->motif }}</td>
                    </tr>
                    @empty
                    <tr><td colspan="3">Aucun rendez-vous.</td></tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection