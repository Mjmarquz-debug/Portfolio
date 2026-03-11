// COMPONENTE PARA CAMBIAR ENTRE MODO CLARO Y OSCURO
// MANTIENE EL ESTADO LOCAL Y GUARDA EN LOCALSTORAGE
import { SunIcon, MoonIcon } from './SunMoon/SunMoon'
import { useState } from 'react'

interface ModeToggleProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

const ModeToggle = ({ isDarkMode, setIsDarkMode }: ModeToggleProps) => {
  const [rotated, setRotated] = useState(false)

  return (
    <button onClick={() => {
      const newTheme = !isDarkMode
      localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      setIsDarkMode(newTheme)
      setRotated(!rotated)
    }}>
      <div className={`ring-2 border-black rounded-xl p-2 ${isDarkMode ? 'bg-[#1F2C34]' : 'bg-[#F3F3F3]'}`}>
        <div className={`flex items-center justify-center cursor-pointer hover:scale-120 transition-transform duration-100 ${rotated ? 'rotate-180' : 'rotate-0'}`}>
          {isDarkMode ? <SunIcon className='text-[#FFCC0B]' /> : <MoonIcon className='dark:text-gray-900' />}
        </div>
      </div>
    </button>
  )
}

export default ModeToggle