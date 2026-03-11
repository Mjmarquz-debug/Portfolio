// COMPONENTE TOGGLE
// MUESTRA UN TOGGLE DE DOS OPCIONES
// ACTUALIZA EL ESTADO Y GUARDAR EN LOCALSTORAGE
// MUESTRA NUMERO ABAJO DEPENDIENDO DE LA OPCIÓN SELECCIONADA
import { useTranslation } from 'react-i18next'

interface ToggleSectionProps {
  isActive: boolean
  setIsActive: (active: boolean) => void
  showJobTime?: boolean
  isDarkMode: boolean
}

function ToggleSection({ isActive, setIsActive, isDarkMode }: ToggleSectionProps) {
  const { t } = useTranslation()
  return (
    <div
      className={`col-start-2 row-start-2 row-span-1 rounded-xl border-2 border-black all transition-all duration-300 ease-in-out pt-[10%]
      flex justify-center
      relative select-none ${isDarkMode ? 'bg-[#1F2C34]' : 'bg-[#F3F3F3]'}
      style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 900 }}
    `}
    >
      <div className='flex flex-col items-center'>
        <div className='relative grid grid-cols-2 bg-[#FF8600] rounded-full border-2 border-black overflow-hidden text-[15px] mx-2 cursor-pointer box-border'>
          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-[#44ADFF] rounded-full 
            2xl:ring-2 xl:ring-2 md:ring-1 sm:ring-1 lg:ring-1 ring-black 
            transition-transform duration-300 ease-in-out ${isActive ? 'translate-x-0' : 'translate-x-full'}`}
          />

          <div
            onClick={() => {
              setIsActive(true)
              localStorage.setItem('active', 'true')
            }}
            className='relative z-10 flex items-center justify-center px-3 py-1 whitespace-nowrap text-black dark:text-black'
          >
            {t('yearsLearning')}
          </div>

          <div
            onClick={() => {
              setIsActive(false)
              localStorage.setItem('active', 'false')
            }}
            className='relative z-10 flex items-center justify-center px-3 py-1 text-black dark:text-black'
          >
            {t('projects')}
          </div>
        </div>

        <span className={`text-[100px] font-black transition-all duration-300 ease-in-out ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {isActive ? '1' : '+4'}
        </span>
      </div>
    </div>
  )
}

export default ToggleSection