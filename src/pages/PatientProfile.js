import React from 'react';

const PatientProfile = () => {
  const patientName = localStorage.getItem('patientName') || "Patient";

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#fdfaf5' 
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '20px', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)', 
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <h2 style={{ color: '#8b735b' }}>Bienvenue, {patientName}</h2>
        <p style={{ color: '#a89081', margin: '20px 0' }}>
          Ceci est votre espace personnel. Vous pouvez voir vos rendez-vous ici.
        </p>
        <div style={{ backgroundColor: '#fdfaf5', padding: '15px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px' }}>
          <p><strong>Prochain RDV:</strong> 06 Mai 2026</p>
          <p><strong>Heure:</strong> 09:00</p>
        </div>
        <button 
          onClick={handleLogout}
          style={{ 
            width: '100%', 
            padding: '12px', 
            backgroundColor: '#d5bdaf', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontWeight: 'bold' 
          }}
        >
          Se Déconnecter
        </button>
      </div>
    </div>
  );
};

export default PatientProfile;