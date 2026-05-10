import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();

  // Données factices pour le graphique (PFE)
  const dataGraphique = [
    { jour: 'Lun', patients: 4 },
    { jour: 'Mar', patients: 7 },
    { jour: 'Mer', patients: 5 },
    { jour: 'Jeu', patients: 9 },
    { jour: 'Ven', patients: 12 },
    { jour: 'Sam', patients: 3 },
    { jour: 'Dim', patients: 1 },
  ];

  // Configuration des cartes statistiques avec navigation
  const statistiques = [
    { label: "Total Patients", valeur: "124", icone: "👥", couleur: "#d5bdaf", path: "/patients" },
    { label: "RDV du Jour", valeur: "12", icone: "📅", couleur: "#e3d5ca", path: "/rdv" },
    { label: "Consultations", valeur: "45", icone: "🩺", couleur: "#edede9", path: "/patients" },
    { label: "Nouveaux", valeur: "+5", icone: "📈", couleur: "#f5ebe0", path: "/patients" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#5d5e5d', fontWeight: '600', marginBottom: '30px' }}>Tableau de Bord</h1>

      {/* Section des Cartes Statistiques */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginBottom: '40px' 
      }}>
        {statistiques.map((stat, index) => (
          <div 
            key={index} 
            onClick={() => navigate(stat.path)}
            style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              textAlign: 'center',
              borderBottom: `4px solid ${stat.couleur}`,
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '30px', marginBottom: '10px' }}>{stat.icone}</div>
            <h3 style={{ color: '#8b735b', fontSize: '12px', margin: '10px 0', textTransform: 'uppercase' }}>{stat.label}</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#5d5e5d', margin: 0 }}>{stat.valeur}</p>
          </div>
        ))}
      </div>

      {/* Section Graphique d'Évolution */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '15px', 
        padding: '25px', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)' 
      }}>
        <h2 style={{ color: '#8b735b', fontSize: '18px', marginBottom: '20px' }}>Évolution des Visites</h2>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataGraphique}>
              <defs>
                <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d5bdaf" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#d5bdaf" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis dataKey="jour" axisLine={false} tickLine={false} tick={{fill: '#a89081'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#a89081'}} />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="patients" 
                stroke="#8b735b" 
                fillOpacity={1} 
                fill="url(#colorPatients)" 
                strokeWidth={3} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;