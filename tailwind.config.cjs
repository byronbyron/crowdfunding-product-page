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
      }
    }
  },
  plugins: []
};
