import React from 'react';

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 2xl:p-10">
      
      {/* SECTION BANNIÈRE EXPLICATIVE (REDIS) */}
      <div className="mb-6 rounded-sm border border-stroke bg-primary bg-opacity-5 p-4 dark:border-strokedark dark:bg-meta-4 dark:bg-opacity-20">
        <h4 className="mb-2 text-lg font-semibold text-primary dark:text-white flex items-center gap-2">
          ⚡ Optimisation des performances avec Redis Cache
        </h4>
        <p className="text-sm text-black dark:text-bodydark">
          Pour éviter de surcharger ta base de données relationnelle <strong>MySQL</strong> à chaque rafraîchissement, les compteurs globaux ci-dessous sont calculés une fois par heure par le backend Laravel, puis stockés sous forme de clés K-V dans <strong>Redis</strong> avec un TTL (Time-To-Live). Temps de réponse : <span className="font-mono text-success font-bold">&lt; 2ms</span>.
        </p>
      </div>

      {/* GRILLE DES CARTES STATISTIQUES */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 md:gap-6 2xl:gap-7.5">
        
        {/* CARTE 1: PATIENTS TOTAL */}
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 text-xl">
            👥
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">1,248</h4>
              <span className="text-sm font-medium text-gray-500">Patients Enregistrés</span>
            </div>
            <span className="flex items-center gap-1 text-xs font-medium text-meta-3 bg-meta-3 bg-opacity-10 py-1 px-2 rounded-full">
              MySQL ➔ Redis
            </span>
          </div>
        </div>

        {/* CARTE 2: RDV DU JOUR */}
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 text-xl">
            📅
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">42</h4>
              <span className="text-sm font-medium text-gray-500">Consultations Aujourd'hui</span>
            </div>
            <span className="flex items-center gap-1 text-xs font-medium text-meta-3 bg-meta-3 bg-opacity-10 py-1 px-2 rounded-full">
              Redis Temp
            </span>
          </div>
        </div>

        {/* CARTE 3: LITS DISPONIBLES */}
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 text-xl">
            🛏️
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">14 / 50</h4>
              <span className="text-sm font-medium text-gray-500">Chambres Disponibles</span>
            </div>
            <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary bg-opacity-10 py-1 px-2 rounded-full">
              Temps Réel
            </span>
          </div>
        </div>

        {/* CARTE 4: LOGS ALERTS */}
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 text-xl">
            ⚠️
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-danger">0</h4>
              <span className="text-sm font-medium text-gray-500">Alertes de Sécurité</span>
            </div>
            <span className="flex items-center gap-1 text-xs font-medium text-warning bg-warning bg-opacity-10 py-1 px-2 rounded-full">
              MongoDB
            </span>
          </div>
        </div>

      </div>

      {/* SECTION GRAPHIQUE/INFO SUPPLÉMENTAIRE TECHNIQUE */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
            Architecture des Données de Smart Clinic
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-stroke rounded dark:border-strokedark bg-gray-50 dark:bg-meta-4">
              <h5 className="font-bold text-primary mb-2">📁 MySQL (Relationnel)</h5>
              <p className="text-xs text-gray-600 dark:text-bodydark font-medium">Stocke les entités fortes et critiques : Profils des Patients, Comptes Utilisateurs, Dossiers Médicaux et Consultations.</p>
            </div>
            <div className="p-4 border border-stroke rounded dark:border-strokedark bg-gray-50 dark:bg-meta-4">
              <h5 className="font-bold text-success mb-2">⚡ Redis (In-Memory Key-Value)</h5>
              <p className="text-xs text-gray-600 dark:text-bodydark font-medium">Gère les sessions actives, met en cache les statistiques lourdes du dashboard et soulage les requêtes de lecture répétitives.</p>
            </div>
            <div className="p-4 border border-stroke rounded dark:border-strokedark bg-gray-50 dark:bg-meta-4">
              <h5 className="font-bold text-warning mb-2">🍃 MongoDB (NoSQL Document)</h5>
              <p className="text-xs text-gray-600 dark:text-bodydark font-medium">Idéal pour le Big Data de la clinique. Reçoit les flux de logs, l'historique d'audit immuable et les fichiers de traçabilité non-structurés.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;