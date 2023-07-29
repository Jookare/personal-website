/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('../public/ccchaos.svg')",
        'magicpattern': "url('../public/magicpattern.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'xl-inner': 'inset 0px 0px 4px 4px rgba(0, 0, 0, 0.35)',
      },
      fontFamily: {
        'mont': ['mont'],
        'consola': ['consola'],
        'hubot': ['hubot']
      },
    }
  },
  plugins: [],
}
