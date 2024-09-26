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
        'screen-200': 'calc(100vh - 200px)',
        'screen-140': 'calc(100vh - 140px)',
        'screen-100': 'calc(100vh - 100px)',
        'screen-80': 'calc(100vh - 80px)',
        'screen-60': 'calc(100vh - 60px)',
        'screen-40': 'calc(100vh - 40px)',
        'screen-20': 'calc(100vh - 20px)',
        'screen-0': 'calc(100vh - 0px)',

      }
    },
  },
  plugins: [],
}
