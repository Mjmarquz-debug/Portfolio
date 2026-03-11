import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/* INICIALIZACION I18NEXT */
i18n.use(initReactI18next).init({

  /* RECURSOS DE TRADUCCION */
  resources: {
    es: {
      translation: {
        certificates: {
          software: 'Programación y Desarrollo de Software',
          frontendDesign: 'Diseño y Desarrollo Frontend',
          introDev: 'Introducción al Desarrollo Web',
          fundamentals: 'Fundamentos de Programación de Software',
          apiSecurity: 'Seguridad Web API',
          math: 'Matemáticas para Programación',
          jsFrontend: 'Desarrollo Frontend con JavaScript'
        },
        portfolio: {
          name: 'Portafolio personal',
          description: 'Proyecto personal para mostrar mis habilidades y algo más sobre mí. Desarrollador frontend y Diseño UI/UX con Figma'
        },
        automation: {
          name: 'Automatización con N8N',
          description: 'Automatización con N8N para el proceso de envío de correos y mensajes en redes sociales con IA, optimizando tiempos y llegando a más clientes'
        },
        sweetlema: {
          name: 'Sweet Lema Website',
          description: 'Página web para una tienda de dulces desarrollada con Shopify, además de tener otra versión desarrollada con HTML, CSS, JavaScript y Python para el backend'
        },
        presentation: {
          start: 'HOLA, SOY UN DESARROLLADOR FRONTEND EN BUSCA DE MI PRIMERA OPORTUNIDAD PROFESIONAL.',
          end: 'APASIONADO POR CREAR APLICACIONES WEB QUE MARQUEN LA DIFERENCIA, SIEMPRE APRENDIENDO Y EXPLORANDO NUEVAS TECNOLOGÍAS.'
        },
        projects: 'Proyectos',
        contact: 'Contacto',
        copyPhone: 'Copiar teléfono',
        copyEmail: 'Copiar correo',
        viewCode: 'Ver código',
        viewDemo: 'Ver demo',
        viewPage: 'Ver página',
        socialMedia: 'Redes sociales',
        yearsLearning: 'Años aprendiendo',
      },
    },
    en: {
      translation: {
        certificates: {
          software: 'Software Programming and Development',
          frontendDesign: 'Frontend Design and Development',
          introDev: 'Introduction to Web Development',
          fundamentals: 'Software Programming Fundamentals',
          apiSecurity: 'Web API Security',
          math: 'Mathematics for Programming',
          jsFrontend: 'Frontend Development with JavaScript'
        },
        portfolio: {
          name: 'Personal Portfolio',
          description: 'Personal project to showcase my skills and more about me. Frontend developer and UI/UX design with Figma'
        },
        automation: {
          name: 'Automation with N8N',
          description: 'Automation with N8N for sending emails and social media messages using AI, saving time and reaching more customers'
        },
        sweetlema: {
          name: 'Sweet Lema Website',
          description: 'Website for a candy store developed with Shopify, also having another version built with HTML, CSS, JavaScript and Python for the backend'
        },
        presentation: {
          start: 'HI, I\'M A FRONTEND DEVELOPER LOOKING FOR MY FIRST PROFESSIONAL OPPORTUNITY.',
          end: 'PASSIONATE ABOUT BUILDING WEB APPLICATIONS THAT MAKE A DIFFERENCE, ALWAYS LEARNING AND EXPLORING NEW TECHNOLOGIES.'
        },
        projects: 'Projects',
        contact: 'Contact',
        copyPhone: 'Copy phone',
        copyEmail: 'Copy email',
        viewCode: 'View code',
        viewDemo: 'View demo',
        viewPage: 'View page',
        socialMedia: 'Social media',
        yearsLearning: 'Years learning',
      },
    },
  },

  /* LENGUAJE INICIAL */
  lng: localStorage.getItem('language') || 'es',

  /* LENGUAJE POR DEFECTO */
  fallbackLng: 'es',

  /* INTERPOLACION */
  interpolation: {
    escapeValue: false
  },

})

export default i18n