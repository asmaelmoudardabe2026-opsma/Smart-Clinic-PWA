import React from 'react';
import { Link } from 'react-router';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function AppHeader({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        
        {/* BOUTON HAMBURGER POUR MOBILE */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!sidebarOpen && '!w-full delay-300'}`}></span>
                <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!sidebarOpen && '!w-full delay-400'}`}></span>
                <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!sidebarOpen && '!w-full delay-500'}`}></span>
              </span>
            </span>
          </button>
        </div>

        {/* BARRE DE RECHERCHE SIMULÉE */}
        <div className="hidden sm:block">
          <div className="relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl">🔍</span>
            <input
              type="text"
              placeholder="Rechercher un dossier patient, un log..."
              className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125 text-sm text-black dark:text-white"
            />
          </div>
        </div>

        {/* ZONE ZONE UTILISATEUR (Haut Droite) */}
        <div className="flex items-center gap-3 2xsm:gap-7">
          <div className="flex items-center gap-4">
            
            {/* TEXTE DU PROFIL */}
            <span className="hidden text-right lg:block">
              <span className="block text-sm font-medium text-black dark:text-white">
                Asma
              </span>
              <span className="block text-xs text-gray-500 font-medium">
                Admin / Security
              </span>
            </span>

            {/* AVATAR SIMULÉ */}
            <Link to="/profile" className="h-12 w-12 rounded-full border border-stroke dark:border-strokedark bg-primary bg-opacity-10 flex items-center justify-center text-xl font-bold text-primary">
              👩‍💻
            </Link>

          </div>
        </div>

      </div>
    </header>
  );
}