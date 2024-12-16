/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005b7b', 
        secondary: '#519db7', 
        accent: '#419be4',
        background: '#e3e7e9', 
        cardBackground: '#dbefff', 
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'], 
      },
      fontSize: {
        xxl: '32px', 
      },
      spacing: {
        '120': '30rem', 
        '140': '35rem',
        '160': '40rem',
      },
      borderRadius: {
        '20': '20px', 
      },
      boxShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.1)', 
      }
    },
  },
  plugins: [],
}
