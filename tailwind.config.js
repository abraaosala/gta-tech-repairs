/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            brand: {
              dark: '#0a192f', // Deep Navy
              blue: '#0033cc', // Royal Blue
              cyan: '#00d4ff', // Cyan highlight
              yellow: '#ffcc00', // Yellow accent
            }
          }
        }
      },
    plugins: [],
}
