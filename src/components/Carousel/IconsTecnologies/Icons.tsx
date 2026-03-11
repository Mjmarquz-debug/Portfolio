// ICONOS DE TECNOLOGÍAS INDIVIDUALES USANDO TechIcon
import { AiFillHtml5, AiOutlineJavaScript } from 'react-icons/ai'
import { GrMysql } from 'react-icons/gr'
import { IoLogoCss3 } from 'react-icons/io5'
import { SiTypescript, SiN8N, SiVite } from 'react-icons/si'
import { FaNodeJs, FaReact, FaShopify } from 'react-icons/fa'
import { BiLogoTailwindCss } from 'react-icons/bi'
import TechIcon from './TechIcon'

export const HtmlIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={AiFillHtml5} label='HTML5' isDarkMode={isDarkMode} />
)
export const CssIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={IoLogoCss3} label='CSS3' isDarkMode={isDarkMode} />
)
export const JsIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={AiOutlineJavaScript} label='JavaScript' isDarkMode={isDarkMode} />
)
export const TsIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={SiTypescript} label='TypeScript' isDarkMode={isDarkMode} />
)
export const NodeIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={FaNodeJs} label='Node.js' isDarkMode={isDarkMode} />
)
export const TailwindIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={BiLogoTailwindCss} label='TailwindCSS' isDarkMode={isDarkMode} />
)
export const ReactIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={FaReact} label='React' isDarkMode={isDarkMode} />
)
export const ShopifyIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={FaShopify} label='Shopify' isDarkMode={isDarkMode} />
)
export const N8nIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={SiN8N} label='n8n' isDarkMode={isDarkMode} />
)
export const ViteIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={SiVite} label='Vite' isDarkMode={isDarkMode} />
)
export const MySQLiteIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <TechIcon Icon={GrMysql} label='MySQLite' isDarkMode={isDarkMode} />
)