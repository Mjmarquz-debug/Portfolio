// COMPONENTE LISTA DE CURSOS PLATZI
// MUESTRA LOS DIPLOMAS CON UN CLICK PARA ABRIR EN OTRA PESTAÑA
// APLICA ESTILO DEPENDIENDO DEL MODO OSCURO
import diplomaSoftware from '../../../assets/platzi/diploma-ruta-software.pdf'
import diplomaDiseñoFront from '../../../assets/platzi/diploma-diseno-desarrollo-frontend.pdf'
import diplomaIntroDesarrollo from '../../../assets/platzi/diploma-intro-desarrollo-web.pdf'
import diplomaFundamentosProgramacion from '../../../assets/platzi/diploma-fundamentos-programacion-software.pdf'
import diplomaSeguridadWebAPI from '../../../assets/platzi/diploma-seguridad-web-api.pdf'
import diplomaMatematicas from '../../../assets/platzi/diploma-matematicas-para-programacion.pdf'
import diplomaFrontJavaScript from '../../../assets/platzi/diploma-desarollo-frontend-con-javascript.pdf'
import { useTranslation } from 'react-i18next'

const ListPlatzi = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const { t } = useTranslation()
  const items = [
    { title: t('certificates.software'), onclick: () => window.open(diplomaSoftware, '_blank') },
    { title: t('certificates.frontendDesign'), onclick: () => window.open(diplomaDiseñoFront, '_blank') },
    { title: t('certificates.introDev'), onclick: () => window.open(diplomaIntroDesarrollo, '_blank') },
    { title: t('certificates.fundamentals'), onclick: () => window.open(diplomaFundamentosProgramacion, '_blank') },
    { title: t('certificates.apiSecurity'), onclick: () => window.open(diplomaSeguridadWebAPI, '_blank') },
    { title: t('certificates.math'), onclick: () => window.open(diplomaMatematicas, '_blank') },
    { title: t('certificates.jsFrontend'), onclick: () => window.open(diplomaFrontJavaScript, '_blank') }
  ]
  return (
    <ul className='list-inside space-y-3 z-10 list-none cursor-pointer flex flex-col justify-center'>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={item.onclick}
          className={` ${isDarkMode ? 'text-white hover:text-[#D973DE]' : 'text-black hover:text-[#FF6C7B]'} rounded-full px-3 py-1 text-[15px] cursor-pointer`}
        >
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default ListPlatzi