<!DOCTYPE html>
<html>
<head>
    <title>Rendez-vous - Smart Clinic</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-5 bg-light">
    <h1>Agenda de la Clinique</h1>

    <div class="card card-body mb-4 shadow-sm">
        <form action="/ajouter-rdv" method="POST" class="row">
            @csrf
            <div class="col-md-3">
                <select name="patient_id" class="form-select" required>
                    <option value="">Sélectionner Patient</option>
                    @foreach($patients as $p)
                        <option value="{{ $p->id }}">{{ $p->nom_complet }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-3"><input type="datetime-local" name="date_heure" class="form-control" required></div>
            <div class="col-md-4"><input type="text" name="motif" class="form-control" placeholder="Motif" required></div>
            <div class="col-md-2"><button class="btn btn-primary w-100">Fixer RDV</button></div>
        </form>
    </div>

    <table class="table table-bordered bg-white">
        <thead class="table-dark">
            <tr><th>Patient</th><th>Date</th><th>Motif</th></tr>
        </thead>
        <tbody>
            @foreach($appointments as $rdv)
            <tr>
                <td>{{ $rdv->patient->nom_complet }}</td>
                <td>{{ $rdv->date_heure }}</td>
                <td>{{ $rdv->motif }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <a href="/liste-patients">← Retour aux patients</a>
</body>
</html>