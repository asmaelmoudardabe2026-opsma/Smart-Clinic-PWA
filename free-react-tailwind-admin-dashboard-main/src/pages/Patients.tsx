import React, { useState } from 'react';

// Structure d'un patient
interface Patient {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  cin: string;
  antecedents: string;
}

const Patients = () => {
  // Données de test (qui viendront de ton API MySQL Laravel plus tard)
  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, nom: "El Amrani", prenom: "Ahmed", telephone: "0661234567", cin: "EE12345", antecedents: "Diabète Type 2" },
    { id: 2, nom: "Bennani", prenom: "Sanae", telephone: "0667890123", cin: "G789456", antecedents: "Aucun" }
  ]);

  // États pour le formulaire de création
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [cin, setCin] = useState('');
  const [antecedents, setAntecedents] = useState('');

  // Fonction pour ajouter un patient (Action Backend MySQL + Log MongoDB)
  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom || !prenom || !cin) return;

    const newPatient: Patient = {
      id: patients.length + 1,
      nom,
      prenom,
      telephone,
      cin,
      antecedents
    };

    setPatients([...patients, newPatient]);
    
    // Notification simulée de ce qui se passe sur ton Backend
    alert(`Succès :\n1. Patient enregistré dans MySQL\n2. Trace d'audit envoyée à MongoDB (Action: CREATE_PATIENT par l'utilisateur connecté)`);

    // Réinitialiser le formulaire
    setNom('');
    setPrenom('');
    setTelephone('');
    setCin('');
    setAntecedents('');
  };

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          👥 Gestion des Patients (Données MySQL)
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
        {/* FORMULAIRE D'AJOUT */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Ajouter un nouveau patient
            </h3>
          </div>
          <form onSubmit={handleAddPatient} className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">Nom</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Ex: El Amrani" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input" required />
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">Prénom</label>
                <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Ex: Ahmed" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input" required />
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">Téléphone</label>
                <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="0661234567" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input" />
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">CIN</label>
                <input type="text" value={cin} onChange={(e) => setCin(e.target.value)} placeholder="Ex: EE12345" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input" required />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block text-black dark:text-white">Antécédents Médicaux</label>
              <textarea rows={3} value={antecedents} onChange={(e) => setAntecedents(e.target.value)} placeholder="Allergies, maladies chroniques..." className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"></textarea>
            </div>

            <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Enregistrer le Patient
            </button>
          </form>
        </div>

        {/* TABLEAU DE LISTE */}
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="py-4 px-4 font-medium text-black dark:text-white">Patient</th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">CIN</th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">Téléphone</th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">Antécédents</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="border-b border-stroke dark:border-strokedark">
                    <td className="py-5 px-4 font-medium text-black dark:text-white">{patient.nom} {patient.prenom}</td>
                    <td className="py-5 px-4 text-black dark:text-white">{patient.cin}</td>
                    <td className="py-5 px-4 text-black dark:text-white">{patient.telephone}</td>
                    <td className="py-5 px-4 text-danger">{patient.antecedents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;