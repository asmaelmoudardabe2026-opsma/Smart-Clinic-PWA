<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda Clinique - Smart Clinic</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-5 bg-light">

    <h1 class="mb-4">Agenda de la Clinique</h1>

    @if(session('success'))
        <div class="alert alert-success shadow-sm">{{ session('success') }}</div>
    @endif

    <div class="card shadow-sm mb-5">
        <div class="card-body">
            <form action="{{ url('/ajouter-rdv') }}" method="POST" class="row g-3">
                @csrf
                <div class="col-md-3">
                    <select name="patient_id" class="form-select" required>
                        <option value="">Sélectionner Patient</option>
                        @foreach($patients as $p)
                            <option value="{{ $p->id }}">{{ $p->nom_complet }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="col-md-3">
                    <input type="datetime-local" name="date_heure" class="form-control" required>
                </div>
                <div class="col-md-4">
                    <input type="text" name="motif" class="form-control" placeholder="Motif de consultation" required>
                </div>
                <div class="col-md-2">
                    <button type="submit" class="btn btn-primary w-100">Fixer RDV</button>
                </div>
            </form>
        </div>
    </div>

    <div class="table-responsive">
        <table class="table table-hover bg-white shadow-sm align-middle">
            <thead class="table-dark text-center">
                <tr>
                    <th>Patient</th>
                    <th>Date & Heure</th>
                    <th>Motif</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="text-center">
                @forelse($appointments as $rdv)
                <tr>
                    <td class="fw-bold">{{ $rdv->patient->nom_complet ?? 'N/A' }}</td>
                    <td>{{ \Carbon\Carbon::parse($rdv->date_heure)->format('d/m/Y H:i') }}</td>
                    <td>{{ $rdv->motif }}</td>
                    <td>
                        <div class="d-flex justify-content-center">
                            <a href="{{ url('/modifier-rdv/'.$rdv->id) }}" class="btn btn-warning btn-sm me-2">
                                Modifier
                            </a>

                            <form action="{{ url('/supprimer-rdv/'.$rdv->id) }}" method="POST" onsubmit="return confirm('Annuler ce RDV ?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-outline-danger btn-sm">Supprimer</button>
                            </form>
                        </div>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="4" class="text-muted p-4">Aucun rendez-vous.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</body>
</html>