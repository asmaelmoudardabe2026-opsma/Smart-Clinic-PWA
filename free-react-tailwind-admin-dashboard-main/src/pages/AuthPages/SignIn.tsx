import React from 'react';
import { Link, useNavigate } from 'react-router';

export default function SignIn() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de la validation du token Sanctum / Laravel JWT
    navigate('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-boxdark-2 px-4">
      <div className="w-full max-w-md rounded-sm border border-stroke bg-white p-8 shadow-default dark:border-strokedark dark:bg-boxdark">
        
        {/* LOGO & TITRE */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white flex items-center justify-center gap-2">
            🩺 Smart Clinic
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Système de Gestion Clinique & Dossiers Médicaux
          </p>
        </div>

        {/* FORMULAIRE */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2.5 block font-medium text-black dark:text-white text-sm">
              Identifiant Professionnel (Email)
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Ex: dr.elamrani@smartclinic.ma"
                className="w-full rounded-sm border border-stroke bg-transparent py-3 pl-4 pr-10 outline-none focus:border-primary dark:border-strokedark dark:bg-form-input text-sm text-black dark:text-white"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">📧</span>
            </div>
          </div>

          <div>
            <label className="mb-2.5 block font-medium text-black dark:text-white text-sm">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-sm border border-stroke bg-transparent py-3 pl-4 pr-10 outline-none focus:border-primary dark:border-strokedark dark:bg-form-input text-sm text-black dark:text-white"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
            </div>
          </div>

          {/* SÉCURITÉ CONTEXTUELLE */}
          <div className="rounded-sm bg-warning bg-opacity-10 p-3 text-xs text-warning border border-warning border-opacity-20">
            🔒 <strong>Note de sécurité :</strong> Toute tentative de connexion est surveillée et journalisée de manière immuable dans l'audit de sécurité <strong>MongoDB</strong>.
          </div>

          {/* BOUTON DE CONNEXION */}
          <div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-sm bg-primary py-3 px-4 font-medium text-white transition hover:bg-opacity-90 text-sm"
            >
              Se connecter via Laravel API
            </button>
          </div>
        </form>

        {/* PIED DE PAGE */}
        <div className="mt-6 text-center text-xs text-gray-400">
          Université Privée de Marrakech — Projet de Fin d'Études S6
        </div>

      </div>
    </div>
  );
}