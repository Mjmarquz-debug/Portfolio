// COMPONENTE PARA CAMBIAR EL IDIOMA (ESPAÑOL / INGLÉS)
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

function LanguageToggle({ isDarkMode }: { isDarkMode: boolean }) {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative select-none'>
      
      {/* BOTÓN PRINCIPAL */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`ring-2 px-3 py-1 rounded-lg ring-black hover:scale-110 transition-transform duration-100 ease-in-out
        ${isDarkMode 
          ? 'bg-[#1F2C34] text-white' 
          : 'bg-[#F3F3F3] text-black'}`}
      >
        Idioma
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <div className={`absolute left-0 mt-2 w-full rounded-xl flex flex-col gap-2 p-2 cursor-pointer ${isDarkMode ? 'bg-[#1F2C34] text-white hover:text-[#44ADFF]' : 'bg-[#F3F3F3] text-black'}`}>
          
          {/* ESPAÑOL */}
          <button
            className={`${isDarkMode ? 'bg-[#1F2C34] text-white hover:text-[#833CF2]' : 'bg-[#F3F3F3] text-black hover:text-[#44ADFF]'}`}
            onClick={(e) => {
              e.stopPropagation()
              localStorage.setItem('language', 'es')
              i18n.changeLanguage('es')
              setIsOpen(false)
            }}
          >
            Español
          </button>

          {/* ENGLISH */}
          <button
            className={`${isDarkMode ? 'bg-[#1F2C34] text-white hover:text-[#833CF2]' : 'bg-[#F3F3F3] text-black hover:text-[#44ADFF]'}`}
            onClick={(e) => {
              e.stopPropagation()
              localStorage.setItem('language', 'en')
              i18n.changeLanguage('en')
              setIsOpen(false)
            }}
          >
            English
          </button>

        </div>
      )}

    </div>
  )
}

export default LanguageToggle