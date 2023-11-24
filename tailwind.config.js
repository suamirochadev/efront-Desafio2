/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    screens: {
      'sm': '415px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    colors: {
      'brand':'#00AEFF',
    'dark-10':'#181818',
    'dark-20':'#474747',
    'dark-30':'#EBE9EA',
    'dark-40':'#F9F9F9',
    },
    fontFamily: {
      mont: ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url('/assets/hero-mobile.png')",
        'hero-desktop': "url('/assets/hero-desktop.png')",
        // Shoes
        'shoes-1':"url('/assets/1.png')",
        'shoes-2':"url('/assets/2.png')",
        'shoes-3':"url('/assets/3.png')",
        'shoes-4':"url('/assets/4.png')",
        'shoes-5':"url('/assets/5.png')",
        'shoes-6':"url('/assets/6.png')",
        'shoes-7':"url('/assets/7.png')",
        'shoes-8':"url('/assets/8.png')",
      }
    },
  },
  plugins: [  ],
}