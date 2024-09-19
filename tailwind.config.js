module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        'screen-navbar': 'calc(100vh - 64px)',
        'screen-200': 'calc(100vh - 280px)',
      }
    },
  },
  plugins: [],
}
