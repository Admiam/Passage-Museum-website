/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'w': '#fff',
      'text': '#4A2B1D',
      'b': '#000',
      'orange': '#F2C987',
      'red': '#B46556',
      'brown': '#BEA995',
      'brownSH': '#A9896B',
      'gray': '#9CA3AF',
      'facebook': '#1877F2',
      'instagram1': '#F9D700',
      'instagram2': '#DE1442',
      'instagram3': '#7C36AE',
      'twitter': '#1DA1F2',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      cookie: ['Cookie', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'bgW': "url('/public/backgroundW.png')",
      }
    }
  },
  plugins: [],
}
