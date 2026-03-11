// INDEX TSX - PUNTO DE ENTRADA DE REACT
// CONFIGURA EL TEMA OSCURO INICIAL SEGÚN LOCALSTORAGE O PREFERENCIA DEL NAVEGADOR
// MONTA EL COMPONENTE APP DENTRO DEL ROOT

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './components/LanSection/i18n.ts';
import './index.css';
import App from './App.tsx';
import '@fontsource/red-hat-display/400.css';
import '@fontsource/red-hat-display/700.css';
import '@fontsource/red-hat-display/900.css';

// OBTIENE EL TEMA GUARDADO EN LOCALSTORAGE
const savedTheme = localStorage.getItem('theme');

// SI EL TEMA ES OSCURO O EL USUARIO PREFIERE OSCURO, APLICA LA CLASE 'DARK'
if (
  savedTheme === 'dark' ||
  (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
}

// MONTA LA APP DENTRO DEL ELEMENTO ROOT
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);