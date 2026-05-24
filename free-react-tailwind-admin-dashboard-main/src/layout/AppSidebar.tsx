import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router'; 

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function AppSidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const location = useLocation();
  const { pathname } = location;

  const sidebar = useRef<any>(null);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* HEADER DE LA SIDEBAR */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <span className="text-white text-2xl font-bold tracking-wide flex items-center gap-2">
            🩺 Smart Clinic
          </span>
        </NavLink>
      </div>

      {/* CORPS DE LA SIDEBAR */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear flex-1">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            {/* Titre du menu en blanc cassé brillant */}
            <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Menu Principal
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* Tableau de bord */}
              <li>
                <NavLink
                  to="/"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-meta-4 ${
                    pathname === '/' && 'bg-meta-4 font-semibold'
                  }`}
                >
                  📊 Tableau de Bord (Redis)
                </NavLink>
              </li>

              {/* Gestion des Patients */}
              <li>
                <NavLink
                  to="/patients"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-meta-4 ${
                    pathname.includes('patients') && 'bg-meta-4 font-semibold'
                  }`}
                >
                  👥 Gestion des Patients
                </NavLink>
              </li>

              {/* Traces de Sécurité MongoDB */}
              <li>
                <NavLink
                  to="/logs"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-meta-4 ${
                    pathname.includes('logs') && 'bg-meta-4 font-semibold'
                  }`}
                >
                  🛡️ Traces de Sécurité (MongoDB)
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}