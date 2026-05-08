import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des composants de structure
import Sidebar from './components/Sidebar';

// Importation des pages du projet
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import RendezVous from './pages/RendezVous';
import Parametres from './pages/Parametres';

/**
 * Composant Principal : App.js
 * Ce fichier gère le routage de ton application Smart Clinic.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour l'authentification (Sans Sidebar) */}
        <Route path="/login" element={<Login />} />

        {/* Routes privées de la clinique (Avec Sidebar) */}
        <Route 
          path="/*" 
          element={
            <div style={{ display: 'flex' }}>
              {/* Menu latéral fixe */}
              <Sidebar />
              
              {/* Contenu de la page à droite du menu */}
              <div style={{ 
                flex: 1, 
                marginLeft: '260px', // Correspond à la largeur de ton Sidebar
                padding: '30px',
                backgroundColor: '#fdfaf5', // Ton beige minimaliste
                minHeight: '100vh'
              }}>
                <Routes>
                  {/* Redirection ou Accueil : Tableau de Bord */}
                  <Route path="/" element={<Dashboard />} />
                  
                  {/* Gestion des Patients */}
                  <Route path="/patients" element={<Patients />} />
                  
                  {/* Gestion des Rendez-vous (Lien /rdv utilisé dans ton navigateur) */}
                  <Route path="/rdv" element={<RendezVous />} />
                  
                  {/* Paramètres du système */}
                  <Route path="/parametres" element={<Parametres />} />
                </Routes>
              </div>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;