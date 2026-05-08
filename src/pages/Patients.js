import React, { useState } from 'react';

const Patients = () => {
  
  const [listPatients, setListPatients] = useState([
    { id: 1, nom: "Zineb El Amrani", age: 24, telephone: "0661234567", derniereVisite: "2026-05-01" },
    { id: 2, nom: "Omar Idrissi", age: 45, telephone: "0670987654", derniereVisite: "2026-04-28" },
    { id: 3, nom: "Sara Slimani", age: 30, telephone: "0665432100", derniereVisite: "2026-05-04" },
    { id: 4, nom: "Karim Tazi", age: 52, telephone: "0662223344", derniereVisite: "2026-05-02" },
  ]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [editPatient, setEditPatient] = useState(null);
  const [isAdding, setIsAdding] = useState(false);


  const [newPatient, setNewPatient] = useState({ nom: '', age: '', telephone: '', derniereVisite: '' });


  const handleAddPatient = (e) => {
    e.preventDefault();
    const id = listPatients.length + 1;
    setListPatients([...listPatients, { ...newPatient, id }]);
    setIsAdding(false);
    setNewPatient({ nom: '', age: '', telephone: '', derniereVisite: '' });
  };
  const supprimerPatient = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce patient ?")) {
      setListPatients(listPatients.filter(p => p.id !== id));
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setListPatients(listPatients.map(p => p.id === editPatient.id ? editPatient : p));
    setEditPatient(null);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#5d5e5d', fontWeight: '600' }}>Gestion des Patients</h1>
        <button 
          onClick={() => setIsAdding(true)}
          style={{ backgroundColor: '#d5bdaf', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
          + Ajouter un Patient
        </button>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #f5ebe0' }}>
              <th style={{ padding: '15px', color: '#8b735b' }}>ID</th>
              <th style={{ padding: '15px', color: '#8b735b' }}>Nom Complet</th>
              <th style={{ padding: '15px', color: '#8b735b' }}>Âge</th>
              <th style={{ padding: '15px', color: '#8b735b' }}>Téléphone</th>
              <th style={{ padding: '15px', color: '#8b735b' }}>Dernière Visite</th>
              <th style={{ padding: '15px', color: '#8b735b', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listPatients.map((p) => (
              <tr key={p.id} style={{ borderBottom: '1px solid #fdfaf5' }}>
                <td style={{ padding: '15px' }}>#{p.id}</td>
                <td style={{ padding: '15px', fontWeight: '500' }}>{p.nom}</td>
                <td style={{ padding: '15px' }}>{p.age} ans</td>
                <td style={{ padding: '15px' }}>{p.telephone}</td>
                <td style={{ padding: '15px' }}>{p.derniereVisite}</td>
                <td style={{ padding: '15px', textAlign: 'center' }}>
                  <button onClick={() => setSelectedPatient(p)} style={iconStyle}>👁️</button>
                  <button onClick={() => setEditPatient(p)} style={iconStyle}>📝</button>
                  <button onClick={() => supprimerPatient(p.id)} style={iconStyle}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAdding && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#8b735b' }}>Nouveau Patient</h2>
            <form onSubmit={handleAddPatient}>
              <input placeholder="Nom complet" style={inputStyle} required onChange={(e)=>setNewPatient({...newPatient, nom: e.target.value})} />
              <input placeholder="Âge" type="number" style={inputStyle} required onChange={(e)=>setNewPatient({...newPatient, age: e.target.value})} />
              <input placeholder="Téléphone" style={inputStyle} required onChange={(e)=>setNewPatient({...newPatient, telephone: e.target.value})} />
              <input type="date" style={inputStyle} required onChange={(e)=>setNewPatient({...newPatient, derniereVisite: e.target.value})} />
              <div style={{ marginTop: '20px' }}>
                <button type="submit" style={saveBtnStyle}>Ajouter</button>
                <button type="button" onClick={() => setIsAdding(false)} style={cancelBtnStyle}>Annuler</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {editPatient && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#8b735b' }}>Modifier le Patient</h2>
            <form onSubmit={handleUpdate}>
              <input value={editPatient.nom} style={inputStyle} onChange={(e) => setEditPatient({...editPatient, nom: e.target.value})} />
              <input value={editPatient.age} type="number" style={inputStyle} onChange={(e) => setEditPatient({...editPatient, age: e.target.value})} />
              <input value={editPatient.telephone} style={inputStyle} onChange={(e) => setEditPatient({...editPatient, telephone: e.target.value})} />
              <div style={{ marginTop: '20px' }}>
                <button type="submit" style={saveBtnStyle}>Sauvegarder</button>
                <button type="button" onClick={() => setEditPatient(null)} style={cancelBtnStyle}>Annuler</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {selectedPatient && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#8b735b' }}>Dossier Médical</h2>
            <p><strong>Nom:</strong> {selectedPatient.nom}</p>
            <p><strong>Âge:</strong> {selectedPatient.age} ans</p>
            <p><strong>Tel:</strong> {selectedPatient.telephone}</p>
            <p><strong>Dernière Visite:</strong> {selectedPatient.derniereVisite}</p>
            <button onClick={() => setSelectedPatient(null)} style={saveBtnStyle}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};


const iconStyle = { marginRight: '10px', cursor: 'pointer', border: 'none', background: 'none', fontSize: '18px' };
const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 };
const modalContentStyle = { backgroundColor: 'white', padding: '30px', borderRadius: '15px', width: '350px' };
const inputStyle = { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' };
const saveBtnStyle = { backgroundColor: '#d5bdaf', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' };
const cancelBtnStyle = { backgroundColor: '#eee', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' };

export default Patients;