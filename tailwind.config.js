/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'brutal': ['Arial Black', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'brutal': {
          'yellow': '#FFFF00',
          'pink': '#FF00FF',
          'cyan': '#00FFFF',
          'lime': '#00FF00',
          'orange': '#FF6600',
        }
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'brutal-lg': '12px 12px 0px 0px #000000',
        'brutal-xl': '16px 16px 0px 0px #000000',
        'brutal-color': '8px 8px 0px 0px #FF00FF',
        'brutal-yellow': '8px 8px 0px 0px #FFFF00',
        'brutal-cyan': '8px 8px 0px 0px #00FFFF',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      }
    },
  },
  plugins: [],
}
