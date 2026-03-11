import { useState } from 'react'
import SocialsSection from './Socials'
import { useTranslation } from 'react-i18next'

/* COMPONENTE CONTACTO Y REDES */
function ContactsSocialsSection({
  showSocials,
  toggleSocials,
  isDarkMode,
  selectedProject,
}: {
  showSocials: boolean
  toggleSocials: () => void
  isDarkMode: boolean
  selectedProject: boolean
}) {

  /* ESTADO COPIAR */
  const [copiedItem, setCopiedItem] = useState<null | 'phone' | 'email'>(null)

  /* TRADUCCIONES */
  const { t } = useTranslation()

  /* ESTILOS TITULO */
  const titleClass = 'text-black rounded-full border-2 border-black py-1 px-3 whitespace-nowrap w-fit'

  /* COLOR TITULO */
  const bgColor = isDarkMode ? 'bg-[#FFCC0B] text-black' : 'bg-[#FFCC0B] text-black'

  /* CONTENEDOR PRINCIPAL */
  return (
    <div
      style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900 }}
      className={`relative col-start-2 row-start-3 row-span-1 rounded-xl border-2 border-black z-50 text-[15px] select-none flex items-center justify-center
        ${showSocials && !selectedProject ? 'col-span-2' : 'col-span-1'}
        ${isDarkMode ? 'bg-[#1F2C34] text-black' : 'bg-[#F3F3F3] text-black'}
      `}
    >

      {/* GRID CONTENIDO */}
      <div className={`grid w-full h-full ${showSocials ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>

        {/* BLOQUE CONTACTO */}
        <div className='flex justify-center flex-col items-center'>

          {/* TITULO */}
          <div className={`${titleClass} ${bgColor} select-none flex justify-center`}>
            {t('contact')}
          </div>

          {/* EMAIL */}
          <div className={`whitespace-nowrap overflow-hidden flex justify-center mt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            martineduardodejesus11@gmail.com
          </div>

          {/* TELEFONO */}
          <div className={`whitespace-nowrap overflow-hidden flex justify-center mt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            +584241669497
          </div>

          {/* BOTONES COPIAR */}
          <div className='mt-4 flex items-center gap-2 select-none'>

            {/* BOTON COPIAR TELEFONO */}
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText('+584241669497')
                  setCopiedItem('phone')
                  setTimeout(() => setCopiedItem(null), 2000)
                } catch (error) {
                  console.error('Error al copiar el teléfono:', error)
                }
              }}
              className='border-2 border-black rounded-full py-1 px-3 cursor-pointer hover:scale-110 bg-[#833CF2] text-black'
            >
              {t('copyPhone')}
            </button>

            {/* BOTON COPIAR EMAIL */}
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText('martineduardodejesus11@gmail.com')
                  setCopiedItem('email')
                  setTimeout(() => setCopiedItem(null), 2000)
                } catch (error) {
                  console.error('Error al copiar el correo:', error)
                }
              }}
              className='border-2 border-black rounded-full py-1 px-3 cursor-pointer hover:scale-110 bg-[#833CF2] text-black'
            >
              {t('copyEmail')}
            </button>

          </div>
        </div>

        {/* BLOQUE REDES */}
        {showSocials && !selectedProject && (
          <div className='flex flex-col justify-center'>
            <SocialsSection isDarkMode={isDarkMode} />
          </div>
        )}

      </div>

      {/* BOTON ABRIR REDES */}
      <button
        onClick={toggleSocials}
        className={`border-2 border-black flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-100 absolute
          ${showSocials ? 'bg-[#FF1A00] -top-5 -right-5 rounded-full w-8 h-8' : 'bg-[#FFCC0B] -bottom-5 -right-12 -rotate-20 rounded-full px-3 h-9 text-[15px] whitespace-nowrap'}`}
      >
        {showSocials ? <span className='text-black'>×</span> : <span className='text-black'>{t('socialMedia')}</span>}
      </button>

      {/* MENSAJE COPIADO */}
      {copiedItem && (
        <div className='fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#1F2C34] ring-2 ring-black text-white text-[13px] shadow-lg z-50'>
          ¡Copiado {copiedItem === 'phone' ? t('copyPhone') : t('copyEmail')} al portapapeles!
        </div>
      )}

    </div>
  )
}

export default ContactsSocialsSection