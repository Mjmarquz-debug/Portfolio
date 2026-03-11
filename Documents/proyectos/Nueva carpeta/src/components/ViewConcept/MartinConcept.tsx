// COMPONENTE MARTIN CONCEPT
// MUESTRA FOTO DE PERFIL, ROL Y PRESENTACIÓN
// EL CUADRO INFERIOR SE EXPANDE PARA CAMBIAR EL TEXTO
// APLICA ESTILO DEPENDIENDO DEL MODO OSCURO
import PhotoProfile from '../../assets/photo/Foto_de_martin_hernandez.jpg'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function MartinConcept({ isDarkMode }: { isDarkMode: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const { t } = useTranslation()

  const bgColorBox = isDarkMode ? 'bg-[#7EE91B] text-black' : 'bg-[#7EE91B] text-black'
  const bgColorBoxName = isDarkMode ? 'bg-[#44ADFF] text-black' : 'bg-[#44ADFF] text-black'
  const bgExpandable = isDarkMode ? 'bg-[#1F2C34] text-white' : 'bg-[#1F2C34] text-white'

  return (
    <div className='relative col-span-1 row-span-3 z-50 select-none'>
      <div className={`absolute top-0 left-0 -translate-y-1/2 -translate-x-1/3 z-50 px-8 py-1 rounded-full whitespace-nowrap text-[25px] 2xl:ring-2 xl:ring-2 lg:ring-1 md:ring-1 sm:ring-1 ring-black -rotate-20 ${bgColorBoxName}`}>
        Martin Hernandez
      </div>

      <div className='rounded-xl relative border-2 border-black overflow-hidden h-full'>
        <div className='relative h-full w-full'>
          <img src={PhotoProfile} alt='Foto de Martin' className='object-cover h-full w-full' />

          <div style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 900 }}
            className={`absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-1 rounded-full whitespace-nowrap border-2 border-black text-[20px] ${bgColorBox}`}>
            FRONT END
          </div>

          <div
            onClick={() => setExpanded(!expanded)}
            className={`absolute bottom-0 left-0 w-full z-10 cursor-pointer lg:ring-2 md:ring-2 sm:ring-2 xl:ring-1 ring-black transition-all duration-500 ${bgExpandable} ${expanded ? 'h-35' : 'h-30'}`}
          >
            <div className='absolute top-0 left-4/5 -translate-y-1/2'>
              <button className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300 ${bgExpandable} ${expanded ? 'rotate-180' : 'rotate-0'}`}>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='size-8'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                </svg>
              </button>
            </div>

            <div className='relative h-full text-white text-[15px] text-center'>
              <p className={`absolute w-full pt-6 px-3 pb-6 transition-all duration-500 transform ${expanded ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {t('presentation.start')}
              </p>

              <p className={`absolute w-full text-white pt-4 px-4 transition-all duration-500 transform ${expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {t('presentation.end')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MartinConcept