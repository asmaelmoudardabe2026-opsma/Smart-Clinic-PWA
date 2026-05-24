import React from 'react';

export default function SidebarWidget() {
  return (
    <div className="mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-500 p-4 text-center dark:bg-meta-4">
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        🩺 Smart Clinic v1.0
      </h3>
      <p className="mb-4 text-gray-500 text-sm dark:text-bodydark">
        Base de données : MySQL, Redis & MongoDB.
      </p>
      <div className="text-xs font-medium text-primary">
        Projet de Fin d'Études
      </div>
    </div>
  );
}