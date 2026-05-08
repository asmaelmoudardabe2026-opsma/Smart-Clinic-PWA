import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Composant Sidebar : Barre de navigation latérale pour l'interface de gestion.
 */
const Sidebar = () => {
  const navigate = useNavigate();

  // Liste des éléments du menu de navigation
  const menuItems = [
    { name: "Tableau de Bord", path: "/", icon: "📊" },
    { name: "Gestion Patients", path: "/patients", icon: "👥" },
    { name: "Rendez-vous", path: "/rdv", icon: "📅" },
    { name: "Paramètres", path: "/parametres", icon: "⚙️" }, // تم التصحيح هنا من settings إلى parametres
  ];

  return (
    <div style={{
      width: '260px',
      height: '100vh',
      backgroundColor: '#f8f4f0', 
      borderRight: '1px solid #e0d7cf',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      position: 'fixed', 
      left: 0,
      top: 0,
      zIndex: 1000
    }}>
      
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#8b735b', fontSize: '22px', margin: 0, fontFamily: 'Arial, sans-serif' }}>
          Smart Clinic
        </h2>
        <span style={{ fontSize: '10px', color: '#a89081', letterSpacing: '2px', fontWeight: 'bold' }}>
          MANAGEMENT
        </span>
      </div>

      <nav style={{ flex: 1 }}>
        {menuItems.map((item, index) => (
          <div 
            key={index}
            onClick={() => navigate(item.path)}
            style={{
              padding: '12px 15px',
              marginBottom: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              color: '#5d5e5d',
              transition: 'background-color 0.3s ease',
              fontWeight: '500'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ede4db'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span style={{ marginRight: '15px', fontSize: '20px' }}>{item.icon}</span>
            {item.name}
          </div>
        ))}
      </nav>

      <button 
        onClick={() => navigate('/login')}
        style={{
          padding: '14px',
          backgroundColor: '#d5bdaf', 
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px',
          marginTop: 'auto',
          transition: 'opacity 0.3s'
        }}
        onMouseOver={(e) => e.target.style.opacity = '0.9'}
        onMouseOut={(e) => e.target.style.opacity = '1'}
      >
        Déconnexion
      </button>
    </div>
  );
};

export default Sidebar;