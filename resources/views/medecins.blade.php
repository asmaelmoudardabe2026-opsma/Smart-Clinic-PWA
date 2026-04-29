<h1>Liste des Médecins</h1>

<form action="/ajouter-medecin" method="POST">
    @csrf
    <input type="text" name="nom" placeholder="Nom du médecin" required>
    <input type="text" name="specialite" placeholder="Spécialité" required>
    <button type="submit">Ajouter</button>
</form>

<hr>

<ul>
    @foreach($medecins as $medecin)
        <li>Dr. {{ $medecin->nom }} - {{ $medecin->specialite }}</li>
    @endforeach
</ul>