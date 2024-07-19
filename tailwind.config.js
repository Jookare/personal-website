/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // => @media (min-width: 576px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'xl-inner': 'inset 0px 0px 4px 4px rgba(0, 0, 0, 0.35)',
      },
      fontFamily: {
        'sans': ['hubot', 'Inter', 'Inter Placeholder', 'Inter-SemiBold', 'sans-serif'],
        'inter': ['Inter'],
        'mont': ['mont'],
        'consola': ['consola'],
        'hubot': ['hubot']
      },
      colors: {
        accent: "#212121",
        primary: "#EE4C2C"
      },
      height: {
        60: '240px',
      },
      minHeight: {
        60: '240px',
      },
    }
  },
  plugins: [require("daisyui")],
}
