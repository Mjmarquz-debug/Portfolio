import { useState } from 'react'
import MartinConcept from '../ViewConcept/MartinConcept'
import CarouselSkills from '../Carousel/CarouselSkills'
import ToggleSection from '../ToggleTime&Projects/ToggleSection'
import ContactsSocialsSection from '../ContactsSocialsSection/Contacts'
import PlatziSection from '../Platzi/PlatziSection'
import ProjectsSection from '../ViewProjects/ProjectsSection'

/* DASHBOARD PRINCIPAL */
export default function Dashboard({ isDarkMode }: { isDarkMode: boolean }) {

  /* ESTADOS UI */
  const [showSocials, setShowSocials] = useState(false)
  const [selectedProject, setSelectedProject] = useState(false)
  const [isActive, setIsActive] = useState(false)

  /* TOGGLE REDES */
  const toggleSocials = () => {
    setShowSocials(prev => {
      const next = !prev

      if (next) {
        setSelectedProject(false)
      }

      return next
    })
  }

  /* TOGGLE PROYECTOS */
  const toggleProjects = () => {
    setSelectedProject(prev => {
      const next = !prev

      if (next) {
        setShowSocials(false)
      }

      return next
    })
  }

  /* GRID DASHBOARD */
  return (
    <div className='grid h-[80vh] max-w-350 w-full grid-cols-4 grid-rows-3 auto-rows-fr gap-1 p-6 relative mx-auto'>

      {/* SECCION CONCEPTO */}
      <MartinConcept isDarkMode={isDarkMode} />

      {/* SECCION SKILLS */}
      <CarouselSkills
        selectedProject={selectedProject}
        isDarkMode={isDarkMode}
      />

      {/* SECCION TOGGLE */}
      <ToggleSection
        isActive={isActive}
        isDarkMode={isDarkMode}
        setIsActive={setIsActive}
      />

      {/* SECCION CONTACTO */}
      <ContactsSocialsSection
        showSocials={showSocials}
        toggleSocials={toggleSocials}
        isDarkMode={isDarkMode}
        selectedProject={selectedProject}
      />

      {/* SECCION PLATZI */}
      <PlatziSection
        showSocials={showSocials}
        selectedProject={selectedProject}
        isDarkMode={isDarkMode}
      />

      {/* SECCION PROYECTOS */}
      <ProjectsSection
        selectedProject={selectedProject}
        toggleProjects={toggleProjects}
        isDarkMode={isDarkMode}
      />

    </div>
  )
}