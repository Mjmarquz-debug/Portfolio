// COMPONENTE PLATZI
// MUESTRA LOGO Y LISTA DE CURSOS
// APLICA ESTILO DEPENDIENDO DEL MODO OSCURO
import PlatziLogo from '../../assets/photo/Platzi.svg'
import PlatziLogoWhite from '../../assets/photo/Platziwhite.png'
import ListPlatzi from './ListCourse/ListPlatzi'

function PlatziSection({
  showSocials,
  selectedProject,
  isDarkMode
}: {
  showSocials: boolean
  selectedProject: boolean
  isDarkMode: boolean
}) {
  return (
    <div
      className={`
        rounded-xl border-2 border-black
        relative z-40
        col-start-3 row-start-2 col-span-1
        transition-all duration-300 ease-in-out select-none
        ${!selectedProject && (showSocials ? 'row-span-1' : 'row-span-2')}
        ${selectedProject ? 'hidden' : ''}
        ${isDarkMode ? 'bg-[#1F2C34] dark:text-white' : 'bg-[#F3F3F3]'}
      `}
    >
      <div className='px-6 overflow-y-auto no-scrollbar h-11/12'>

        <div className={`sticky top-0 pt-5 py-5 flex items-center justify-center z-20 transition-all duration-300 ease-in-out select-none
          ${isDarkMode ? 'bg-[#1F2C34]' : 'bg-[#F3F3F3]'}`}
        >
          <img src={isDarkMode ? PlatziLogoWhite : PlatziLogo} alt='Platzi Logo' className='h-15 w-auto' />
        </div>

        <div className='text-center' style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 900 }}>
          <ListPlatzi isDarkMode={isDarkMode} />
        </div>

      </div>
    </div>
  )
}

export default PlatziSection