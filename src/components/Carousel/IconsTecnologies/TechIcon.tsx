// COMPONENTE PARA MOSTRAR ICONOS DE TECNOLOGÍAS CON SU LABEL
import type { IconType } from 'react-icons'

type TechIconProps = {
  Icon: IconType
  label: string
  isDarkMode: boolean
}

const TechIcon = ({ Icon, label, isDarkMode }: TechIconProps) => {
  return (
    <div className='flex flex-col items-center gap-4 w-full h-full max-w-62.5'>
      <Icon size={50} color={isDarkMode ? 'white' : 'black'} />
      <span className='text-sm font-medium text-center w-full'>
        {label}
      </span>
    </div>
  )
}

export default TechIcon