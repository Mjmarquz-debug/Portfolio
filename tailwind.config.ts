import type { Config } from 'tailwindcss'
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#EAFD89',
      },
      fontFamily: {
        redHat: ['"Red Hat Display"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindScrollbarHide,
  ],
}

export default config