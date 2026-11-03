/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: {
          DEFAULT: '#FAF9F6', // Primary warm off-white canvas
          50: '#FFFFFF',
          100: '#FAF9F6',
          200: '#F4F1EA',
          300: '#ECE6DA',
          400: '#DFD7C5',
          soft: '#F5F3ED',
          card: '#FAF9F6',
        },
        navy: {
          DEFAULT: '#0A192F', // Deep, authoritative dark navy
          950: '#050D1A',
          900: '#0A192F', // Hero & footer primary
          850: '#0D203C',
          800: '#11294D',
          700: '#193969',
          600: '#234C88',
          accent: '#1E3A8A',
        },
        champagne: {
          DEFAULT: '#C5A880', // Refined gold / brass accent for borders and highlights
          light: '#DFCCA6',
          dark: '#9F8158',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(10, 25, 47, 0.05)',
        'elevated': '0 10px 30px -4px rgba(10, 25, 47, 0.1)',
        'premium': '0 20px 40px -15px rgba(10, 25, 47, 0.18)',
      }
    },
  },
  plugins: [],
};
