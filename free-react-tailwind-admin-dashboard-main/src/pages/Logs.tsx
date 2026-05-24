import React from 'react';

interface AuditLog {
  id: string;
  utilisateur: string;
  action: string;
  details: string;
  date: string;
  ip: string;
}

const Logs = () => {
  // Simulation des données stockées dans MongoDB NoSQL
  const logs: AuditLog[] = [
    { id: "65f1a2b3c4d5e6f7a8b90123", utilisateur: "Dr. El Amrani", action: "CONNEXION", details: "Authentification réussie via Laravel Sanctum", date: "24/05/2026 01:15", ip: "192.168.1.50" },
    { id: "65f1a2b3c4d5e6f7a8b90124", utilisateur: "Secrétaire Fatima", action: "CREATE_PATIENT", details: "Ajout du patient Ahmed El Amrani dans MySQL", date: "24/05/2026 01:12", ip: "192.168.1.52" },
    { id: "65f1a2b3c4d5e6f7a8b90125", utilisateur: "Dr. El Amrani", action: "CONSULTATION_UPDATE", details: "Modification des antécédents médicaux (CIN: EE12345)", date: "24/05/2026 01:05", ip: "192.168.1.50" }
  ];

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white flex items-center gap-2">
          🛡️ Traces d'Audit & Sécurité (Données MongoDB)
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Historique immuable des actions utilisateurs pour la conformité et la sécurité des données médicales.
        </p>
      </div>

      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 px-4 font-medium text-black dark:text-white">ID Log (MongoDB)</th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">Utilisateur</th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">Action</th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">Détails</th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">Date & Heure</th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">Adresse IP</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-stroke dark:border-strokedark font-mono text-sm">
                  <td className="py-5 px-4 text-primary">{log.id}</td>
                  <td className="py-5 px-4 text-black dark:text-white font-sans font-medium">{log.utilisateur}</td>
                  <td className="py-5 px-4">
                    <span className={`inline-block rounded-full py-1 px-3 text-xs font-medium ${
                      log.action === 'CONNEXION' ? 'bg-success bg-opacity-10 text-success' : 'bg-warning bg-opacity-10 text-warning'
                    }`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-black dark:text-white font-sans">{log.details}</td>
                  <td className="py-5 px-4 text-black dark:text-white">{log.date}</td>
                  <td className="py-5 px-4 text-black dark:text-white">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logs;