import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { PiReadCvLogoLight } from 'react-icons/pi'
import { useTranslation } from 'react-i18next'

/* COMPONENTE REDES SOCIALES */
function SocialsSection({ isDarkMode }: { isDarkMode: boolean }) {

  /* TRADUCCIONES */
  const { t } = useTranslation()

  /* COLOR TITULO */
  const bgColor = isDarkMode ? 'bg-[#44ADFF] text-black' : 'bg-[#44ADFF] text-black'

  /* CONTENEDOR REDES */
  return (
    <div className='flex flex-col items-center justify-center gap-3'>

      {/* TITULO REDES */}
      <div className={`rounded-full border-2 border-black py-1 px-3 whitespace-nowrap w-fit flex items-center justify-center ${bgColor}`}>
        {t('socialMedia')}
      </div>

      {/* ICONOS REDES */}
      <div className='flex items-center gap-3 mt-2'>

        {/* LINKEDIN */}
        <a href='https://www.linkedin.com/in/martin-hernandezz/' target='_blank' rel='noopener noreferrer'>
          <IoLogoLinkedin className={`h-10 w-auto hover:scale-110 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        </a>

        {/* GITHUB */}
        <a href='https://github.com/Mjmarquz-debug' target='_blank' rel='noopener noreferrer'>
          <IoLogoGithub className={`h-10 w-auto hover:scale-110 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        </a>

        {/* DESCARGAR CV */}
        <a href='/cvmartinhernandez.pdf' download>
          <PiReadCvLogoLight className={`h-10 w-auto hover:scale-110 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        </a>

      </div>

    </div>
  )
}

export default SocialsSection