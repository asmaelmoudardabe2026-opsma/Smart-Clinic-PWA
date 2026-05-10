@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2 class="text-primary mb-4"><i class="fas fa-user-md"></i> Gestion des Médecins</h2>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <div class="row">
        <!-- Formulaire d'ajout -->
        <div class="col-md-4">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">Nouveau Médecin</div>
                <div class="card-body">
                    <form action="{{ route('medecins.store') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label>Nom</label>
                            <input type="text" name="nom" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label>Prénom</label>
                            <input type="text" name="prenom" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label>Spécialité</label>
                            <input type="text" name="specialite" class="form-control" placeholder="ex: Cardiologue" required>
                        </div>
                        <div class="mb-3">
                            <label>Téléphone</label>
                            <input type="text" name="telephone" class="form-control" required>
                        </div>
                        <button type="submit" class="btn btn-success w-100">Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Liste des médecins -->
        <div class="col-md-8">
            <div class="card shadow-sm">
                <div class="card-header bg-dark text-white">Équipe Médicale</div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Médecin</th>
                                <th>Spécialité</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($medecins as $medecin)
                            <tr>
                                <td><strong>Dr. {{ $medecin->nom }}</strong> {{ $medecin->prenom }}</td>
                                <td><span class="badge bg-info text-dark">{{ $medecin->specialite }}</span></td>
                                <td>{{ $medecin->telephone }}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection