import React, { useState } from 'react';

/**
 * Page des Paramètres - Smart Clinic
 * Permet de modifier les informations de la clinique.
 */
const Parametres = () => {
  const [clinicName, setClinicName] = useState("Smart Clinic Management");
  const [ville, setVille] = useState("Marrakech");
  const [phone, setPhone] = useState("0524XXXXXX");

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#5d5e5d', fontWeight: '600', marginBottom: '30px' }}>Paramètres du Système</h1>

      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '15px', 
        padding: '40px', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        maxWidth: '600px'
      }}>
        <h3 style={{ color: '#8b735b', marginBottom: '25px' }}>Informations Générales</h3>

        {/* Nom de la Clinique */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Nom de la Clinique</label>
          <input 
            type="text" 
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '8px', 
              border: '1px solid #eee',
              backgroundColor: '#fdfaf5'
            }} 
          />
        </div>

        {/* Ville */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Ville</label>
          <input 
            type="text" 
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '8px', 
              border: '1px solid #eee',
              backgroundColor: '#fdfaf5'
            }} 
          />
        </div>

        {/* Téléphone */}
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Téléphone de contact</label>
          <input 
            type="text" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '8px', 
              border: '1px solid #eee',
              backgroundColor: '#fdfaf5'
            }} 
          />
        </div>

        {/* Bouton de Sauvegarde */}
        <button style={{
          padding: '12px 30px',
          backgroundColor: '#d5bdaf',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%'
        }}>
          Enregistrer les modifications
        </button>
      </div>
    </div>
  );
};

export default Parametres;