// COMPONENTE DE PROYECTOS
// MUESTRA PROYECTOS CON IMAGEN, DESCRIPCIÓN, TECNOLOGÍAS Y BOTONES
// SE AJUSTA SEGÚN EL ANCHO DE LA PANTALLA Y SI ESTÁ EXPANDIDO
import { FaReact, FaFigma } from 'react-icons/fa'
import type { IconType } from 'react-icons/lib'
import { SiTypescript, SiTailwindcss, SiN8N, SiGooglegemini, SiJavascript, SiHtml5, SiCss3, SiPython, SiShopify } from 'react-icons/si'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function ProjectsSection({
  selectedProject,
  toggleProjects,
  isDarkMode,
}: {
  selectedProject: boolean
  toggleProjects: () => void
  isDarkMode: boolean
}) {
  const { t } = useTranslation()

  const titleClass = 'bg-[#FFCC0B] rounded-full border-2 border-black py-1 px-3 whitespace-nowrap w-fit items-center justify-center flex'
  const buttonClassExpanded = 'text-black bg-[#FF8600] rounded-full border-2 border-black px-3 py-1 text-[15px] cursor-pointer hover:scale-110'
  const buttonClassCollapsed = 'text-black bg-[#FF8600] rounded-full border-2 border-black px-2 py-0.5 text-[15px] cursor-pointer hover:scale-110'

  const technIcons: Record<string, IconType> = {
    react: FaReact,
    typescript: SiTypescript,
    tailwindcss: SiTailwindcss,
    figma: FaFigma,
    n8n: SiN8N,
    gemini: SiGooglegemini,
    javascript: SiJavascript,
    html: SiHtml5,
    css: SiCss3,
    python: SiPython,
    shopify: SiShopify,
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const projects = [
    {
      name: t('portfolio.name'),
      description: t('portfolio.description'),
      image: '/foto_portafolio.png',
      technologies: ['react', 'typescript', 'tailwindcss', 'figma'],
      code: 'https://github.com/martinhernandezz/Portfolio',
      demo: 'https://martinhernandezz.github.io/Portfolio/',
    },
    {
      name: t('automation.name'),
      description: t('automation.description'),
      image: '/1.png',
      technologies: ['n8n', 'gemini'],
      code: 'https://github.com/Mjmarquz-debug/n8n-FlowChart-Chats',
      demo: 'https://martinhernandezz.github.io/Lego-Landing-Page/',
    },
    {
      name: t('sweetlema.name'),
      description: t('sweetlema.description'),
      image: '/1.png',
      technologies: ['javascript', 'html', 'css', 'python', 'shopify'],
      page: 'https://sweetslema.com/',
    },
  ]

  const projectsToShow = selectedProject
    ? projects.length
    : windowWidth > 1500
    ? 2
    : windowWidth > 1000
    ? 1
    : 2

  return (
    <div
      style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 900 }}
      className={`col-span-1 overflow-visible row-span-3 rounded-xl z-40 p-4 flex border-2 border-black relative flex-col text-[15px]
        ${isDarkMode ? 'bg-[#1F2C34] text-white' : 'bg-[#F3F3F3] text-black'}
        ${selectedProject ? 'col-start-3 col-span-2 row-start-1 row-span-3' : 'col-start-4 col-span-1 row-span-3'}
        transition-all duration-100`}
    >
      <div className={`${titleClass}  gap-5 mb-5 self-center text-black`}>{t('projects')}</div>

      <div className='w-full flex flex-col overflow-hidden h-full'>
        <div className={`grid w-full overflow-y-auto gap-x-5 gap-y-5 no-scrollbar ${selectedProject ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {projects.slice(0, projectsToShow).map((project) => (
            <div key={project.name} className='flex flex-col gap-5 w-full items-center text-[15px]'>
              <img
                src={project.image}
                alt={project.name}
                className='w-55 h-25 object-cover rounded hidden xl:block shrink-0'
              />
              <div className='flex flex-col w-full items-center text-center gap-5'>
                <p className='text-[15px]'>{project.name}</p>
                <p>{project.description}</p>

                <div className='flex gap-3 items-center justify-center'>
                  {project.technologies.map((tech) => {
                    const Icon = technIcons[tech]
                    return Icon ? (
                      <div key={tech} className='relative group flex flex-col items-center'>
                        <Icon size={20} className={`transition-transform duration-100 ${isDarkMode ? 'text-[#D973DE]' : 'text-black'} group-hover:scale-125`} />
                        <span className='absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-200 text-[11px] bg-[#1F2C34] ring-2 ring-black text-white px-2 py-1 rounded-full whitespace-nowrap pointer-events-none z-50'>
                          {tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </span>
                      </div>
                    ) : null
                  })}
                </div>
              </div>

              <div className='flex justify-center mt-2 gap-2'>
                {project.code && (
                  <button type='button' onClick={() => window.open(project.code, '_blank')} className={selectedProject ? buttonClassExpanded : buttonClassCollapsed}>
                    {t('viewCode')}
                  </button>
                )}
                {project.demo && (
                  <button type='button' onClick={() => window.open(project.demo, '_blank')} className={selectedProject ? buttonClassExpanded : buttonClassCollapsed}>
                    {t('viewDemo')}
                  </button>
                )}
                {project.page && (
                  <button type='button' onClick={() => window.open(project.page, '_blank')} className={selectedProject ? buttonClassExpanded : buttonClassCollapsed}>
                    {t('viewPage')}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={toggleProjects}
          className={`absolute w-8 h-8 rounded-full text-black border-2 border-black flex items-center justify-center
          ${selectedProject ? 'bg-[#FF1A00]' : 'bg-[#FFCC0B]'}
          -bottom-3 -right-3 cursor-pointer transition-colors duration-300`}
        >
          {selectedProject ? '×' : '+'}
        </button>
      </div>
    </div>
  )
}

export default ProjectsSection