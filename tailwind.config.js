// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


 module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'flip': 'flip 3s linear infinite',
      },
      keyframes: {
        flip: {
          '0%, 100%': { 
            transform: 'rotateY(0deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': { 
            transform: 'rotateY(180deg)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
}