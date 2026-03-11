// APP TSX - PUNTO DE ENTRADA PRINCIPAL DE LA APLICACIÓN
// ADMINISTRA EL MODO OSCURO/CLARO Y EL CAMBIO DE IDIOMA
// MUESTRA EL DASHBOARD Y LOS BOTONES DE CONFIGURACIÓN

import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import ModeToggle from './components/LightDarkMode/Mode';
import LanguageToggle from './components/LanSection/ButtonLanguage';

function App() {
  // ESTADO DEL MODO OSCURO SEGÚN EL LOCALSTORAGE
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  return (
    <div
      style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 900 }}
      className={`h-screen w-screen flex justify-center items-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >

      {/* BOTONES DE IDIOMA Y MODO OSCURO */}
      <div className='absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-120'>
        <LanguageToggle isDarkMode={isDarkMode} />
        <ModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>

      {/* DASHBOARD PRINCIPAL */}
      <Dashboard isDarkMode={isDarkMode} />

    </div>
  );
}

export default App;