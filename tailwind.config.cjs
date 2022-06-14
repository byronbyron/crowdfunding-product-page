module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Commissioner', 'sans-serif'],
      },
      lineHeight: {
        'relaxed': '1.725',
      },
      colors: {
        'cyan': 'hsl(176, 50%, 47%)',
        'cyan-dark': 'hsl(176, 72%, 28%)',
        'dark-grey': 'hsl(0, 0%, 48%)',
        'light': '#d7d7d7',
      },
      boxShadow: {
        'sm': '0 0 0 1px #d7d7d7',
        'md': '0 0 0 2px #d7d7d7',
      },
      lineHeight: {
        'loose': '1.875',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
