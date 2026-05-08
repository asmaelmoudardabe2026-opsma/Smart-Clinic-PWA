import React, { useState } from 'react';

const RendezVous = () => {
  const [listPatients] = useState([
    { id: 1, nom: "Zineb El Amrani" },
    { id: 2, nom: "Omar Idrissi" },
    { id: 3, nom: "Sara Slimani" },
    { id: 4, nom: "Karim Tazi" },
  ]);


  const [appointments, setAppointments] = useState([
    { id: 1, patient: "Zineb El Amrani", heure: "09:00", date: "2026-05-06", type: "Consultation", statut: "En attente" },
    { id: 2, patient: "Omar Idrissi", heure: "10:30", date: "2026-05-06", type: "Contrôle", statut: "Confirmé" },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newRDV, setNewRDV] = useState({ patient: '', heure: '', date: '', type: 'Consultation', statut: 'En attente' });

  const handleAddRDV = (e) => {
    e.preventDefault();
    if (!newRDV.patient) {
      alert("Veuillez sélectionner un patient");
      return;
    }
    setAppointments([...appointments, { ...newRDV, id: appointments.length + 1 }]);
    setIsAdding(false);
    setNewRDV({ patient: '', heure: '', date: '', type: 'Consultation', statut: 'En attente' });
  };

  // دالة تغيير الحالة (🔄)
  const toggleStatut = (id) => {
    setAppointments(appointments.map(rdv => 
      rdv.id === id ? { ...rdv, statut: rdv.statut === "En attente" ? "Terminé" : "En attente" } : rdv
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#5d5e5d', fontWeight: '600' }}>Gestion des Rendez-vous</h1>
        <button 
          onClick={() => setIsAdding(true)}
          style={{ backgroundColor: '#d5bdaf', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
          + Nouveau Rendez-vous
        </button>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #f5ebe0' }}>
              <th style={thStyle}>Patient</th>
              <th style={thStyle}>Heure</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Statut</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((rdv) => (
              <tr key={rdv.id} style={{ borderBottom: '1px solid #fdfaf5' }}>
                <td style={tdStyle}>{rdv.patient}</td>
                <td style={tdStyle}>{rdv.heure}</td>
                <td style={tdStyle}>{rdv.date}</td>
                <td style={tdStyle}>{rdv.type}</td>
                <td style={tdStyle}>
                  <span style={{
                    padding: '5px 12px', borderRadius: '20px', fontSize: '12px',
                    backgroundColor: rdv.statut === "Terminé" ? "#e9f5db" : "#fefae0",
                    color: rdv.statut === "Terminé" ? "#718355" : "#b08968"
                  }}>
                    {rdv.statut}
                  </span>
                </td>
                <td style={tdStyle}>
                  <button onClick={() => toggleStatut(rdv.id)} style={iconBtn} title="Changer Statut">🔄</button>
                  <button onClick={() => setAppointments(appointments.filter(a => a.id !== rdv.id))} style={iconBtn} title="Supprimer">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAdding && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2 style={{ color: '#8b735b', marginBottom: '20px' }}>Planifier un RDV</h2>
            <form onSubmit={handleAddRDV}>
              <label style={labelStyle}>Sélectionner le Patient :</label>
              <select 
                style={inputStyle} 
                required 
                value={newRDV.patient}
                onChange={(e) => setNewRDV({...newRDV, patient: e.target.value})}
              >
                <option value="">-- Choisir un patient --</option>
                {listPatients.map(p => (
                  <option key={p.id} value={p.nom}>{p.nom}</option>
                ))}
              </select>

              <label style={labelStyle}>Heure :</label>
              <input type="time" style={inputStyle} required onChange={(e)=>setNewRDV({...newRDV, heure: e.target.value})} />
              
              <label style={labelStyle}>Date :</label>
              <input type="date" style={inputStyle} required onChange={(e)=>setNewRDV({...newRDV, date: e.target.value})} />

              <label style={labelStyle}>Type de visite :</label>
              <select style={inputStyle} onChange={(e)=>setNewRDV({...newRDV, type: e.target.value})}>
                <option value="Consultation">Consultation</option>
                <option value="Contrôle">Contrôle</option>
                <option value="Urgence">Urgence</option>
              </select>

              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button type="submit" style={btnPrimary}>Confirmer</button>
                <button type="button" onClick={() => setIsAdding(false)} style={btnSecondary}>Annuler</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
const thStyle = { padding: '15px', color: '#8b735b', fontWeight: 'bold' };
const tdStyle = { padding: '15px' };
const labelStyle = { display: 'block', fontSize: '14px', color: '#8b735b', marginBottom: '5px' };
const iconBtn = { cursor: 'pointer', border: 'none', background: 'none', fontSize: '18px', marginRight: '10px' };
const overlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 };
const modalStyle = { backgroundColor: 'white', padding: '30px', borderRadius: '15px', width: '380px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' };
const inputStyle = { width: '100%', padding: '10px', margin: '5px 0 15px 0', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' };
const btnPrimary = { flex: 1, backgroundColor: '#d5bdaf', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const btnSecondary = { flex: 1, backgroundColor: '#eee', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer' };

export default RendezVous;