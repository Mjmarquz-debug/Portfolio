import React, { useRef, useEffect, useState } from 'react'
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  TsIcon,
  NodeIcon,
  ReactIcon,
  TailwindIcon,
  ShopifyIcon,
  N8nIcon,
  ViteIcon,
  MySQLiteIcon,
} from './IconsTecnologies/Icons'

const icons = (isDarkMode: boolean) => [
  <HtmlIcon isDarkMode={isDarkMode} />,
  <CssIcon isDarkMode={isDarkMode} />,
  <JsIcon isDarkMode={isDarkMode} />,
  <TsIcon isDarkMode={isDarkMode} />,
  <NodeIcon isDarkMode={isDarkMode} />,
  <ReactIcon isDarkMode={isDarkMode} />,
  <TailwindIcon isDarkMode={isDarkMode} />,
  <ShopifyIcon isDarkMode={isDarkMode} />,
  <N8nIcon isDarkMode={isDarkMode} />,
  <ViteIcon isDarkMode={isDarkMode} />,
  <MySQLiteIcon isDarkMode={isDarkMode} />,
]

function CarouselSkills({ selectedProject, isDarkMode }: { selectedProject: boolean, isDarkMode: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const repeatedIcons = [...icons(isDarkMode), ...icons(isDarkMode)]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let frameId: number
    const speed = 0.5

    const step = () => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += speed
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }
      frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [isPaused, isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    if (containerRef.current) setScrollStart(containerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    const walk = startX - e.clientX
    containerRef.current.scrollLeft = scrollStart + walk
  }

  const handleMouseUp = () => setIsDragging(false)

  return (
    <div
      className={`col-start-2 row-start-1 row-span-1 rounded-xl border-2 border-black
       flex items-center justify-center p-6 select-none all transition-all duration-300 ease-in-out
      ${isDarkMode ? 'bg-[#1F2C34]' : 'bg-[#F3F3F3]'}
      ${selectedProject ? 'col-span-1' : 'col-span-2'}`}
    >
      <div className='relative w-full h-full flex items-center'>
        <div
          ref={containerRef}
          className='flex items-center gap-4 overflow-x-hidden w-full h-full'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {repeatedIcons.map((icon, idx) => (
            <div
              key={`${idx}-${icon.type.name}`}
              className='flex-none flex flex-col items-center justify-center w-20 sm:w-25 md:w-32 lg:w-36 h-auto hover:scale-120 all transition-transform duration-100 ease-in'
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselSkills