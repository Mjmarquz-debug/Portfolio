/* ICONOS DE MODO LUZ/OSCURO */
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={`w-5 h-5 ${className ?? ''}`}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    {/* CIRCULO CENTRAL */}
    <circle cx='12' cy='12' r='5' />
    {/* RAYOS DEL SOL */}
    <g stroke='currentColor' strokeWidth='2'>
      <line x1='12' y1='1' x2='12' y2='4' />
      <line x1='12' y1='20' x2='12' y2='23' />
      <line x1='4.22' y1='4.22' x2='6.34' y2='6.34' />
      <line x1='17.66' y1='17.66' x2='19.78' y2='19.78' />
      <line x1='1' y1='12' x2='4' y2='12' />
      <line x1='20' y1='12' x2='23' y2='12' />
      <line x1='4.22' y1='19.78' x2='6.34' y2='17.66' />
      <line x1='17.66' y1='6.34' x2='19.78' y2='4.22' />
    </g>
  </svg>
)

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={`w-5 h-5 ${className ?? ''}`}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 8'
    width='24'
    height='24'
    fill='currentColor'
  >
    {/* LUNA */}
    <path d='M2.72 0A3.99 3.99 0 0 0 0 3.78c0 2.21 1.79 4 4 4c1.76 0 3.25-1.14 3.78-2.72c-.4.13-.83.22-1.28.22c-2.21 0-4-1.79-4-4c0-.45.08-.88.22-1.28' />
  </svg>
)

export { SunIcon, MoonIcon }