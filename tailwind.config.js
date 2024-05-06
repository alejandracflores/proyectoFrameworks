/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'AzulOs': '#2A324B',
          'Azul': '#007FFF',
          'NaranjaOs': '#B87E14',
          'Naranja': '#FFA500',
          'NaranjaTrans50': 'rgba(255,165,0,0.5)',
          'NaranjaTrans20': 'rgba(255,165,0,0.2)',
          'VerLima': '#9BC995', 
          'VerTrans': 'rgba(155,201,149,0.6)',
          'Blanco': '#FFFFFF',
          'Negro': '#2c2d2d'

        }
      },
    },
    plugins: [],
}
