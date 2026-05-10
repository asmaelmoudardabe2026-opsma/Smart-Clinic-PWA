@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <!-- 1. En-tête de la page -->
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="text-primary"><i class="fas fa-user-medical"></i> Gestion des Patients - Smart Clinic</h2>
    </div>

    <!-- 2. Affichage des messages de succès -->
    @if(session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Succès !</strong> {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif

    <div class="row">
        <!-- 3. Formulaire d'Ajout (Partie Gauche) -->
        <div class="col-md-4">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Nouveau Patient</h5>
                </div>
                <div class="card-body">
                    <form action="{{ route('patients.store') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Nom</label>
                            <input type="text" name="nom" class="form-control @error('nom') is-invalid @enderror" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Prénom</label>
                            <input type="text" name="prenom" class="form-control @error('prenom') is-invalid @enderror" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Téléphone</label>
                            <input type="text" name="telephone" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-success w-100">Enregistrer le Patient</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- 4. Liste des Patients (Partie Droite) -->
        <div class="col-md-8">
            <div class="card shadow-sm">
                <div class="card-header bg-dark text-white">
                    <h5 class="mb-0">Dossiers Patients</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Patient</th>
                                    <th>Contact</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($patients as $patient)
                                    <tr>
                                        <td>
                                            <strong>{{ $patient->nom }}</strong> {{ $patient->prenom }}
                                        </td>
                                        <td>
                                            <small class="text-muted">{{ $patient->telephone }}</small><br>
                                            <span class="badge bg-light text-dark">{{ $patient->email }}</span>
                                        </td>
                                        <td>
                                            <div class="btn-group">
                                                <button class="btn btn-sm btn-outline-info">Modifier</button>
                                                <button class="btn btn-sm btn-outline-danger">Supprimer</button>
                                            </div>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="3" class="text-center text-muted">Aucun patient enregistré pour le moment.</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection