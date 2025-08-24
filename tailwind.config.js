// tailwind.config.js  (or tailwind.config.cjs / .mjs)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /*  ↓ FONT FAMILY  ↓  */
      fontFamily: {
    montserrat: ['Montserrat', 'sans-serif'],
},
      /*  ↓ PALETTE  ↓  */
      colors: {
        'sky-blue':   '#0099ff',
        'rich-blue':  '#0b5aad',
        'cloud-grey': '#f2f4f7',
        'rose-coral': '#ff7b89',
      },

      /*  ↓ ANIMATIONS  ↓  */
      animation: {
        glow:  'glow 1.5s ease-in-out infinite',
        blink: 'blink 1.2s steps(2, start) infinite',
        pulse: 'pulse 2s infinite',
        bounce:'bounce 1.5s infinite',
      },
      keyframes: {
        glow: {
          '0%,100%': { boxShadow: '0 0 10px #0099ff, 0 0 20px #0099ff', opacity: 1 },
          '50%':     { boxShadow: '0 0 20px #0b5aad, 0 0 40px #0b5aad', opacity: 0.7 },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
