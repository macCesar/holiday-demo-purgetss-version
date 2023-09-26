module.exports = {
  purge: {
    mode: 'all',
    options: {
      legacy: false,
      missing: true,
      widgets: true,
      safelist: [],
      plugins: []
    },
    method: 'sync'
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff3ff',
          100: '#fde6ff',
          200: '#fdccff',
          300: '#fea4ff',
          400: '#ff6dff',
          500: '#f837fe',
          600: '#e016e3',
          700: '#ce10cc',
          800: '#9a0e97',
          900: '#7d1278',
          950: '#550052',
          default: '#ce10cc'
        }
      }
    },
    '.main-banner': { apply: [ 'bg-primary/35', 'border-primary/75' ] },
    Label: { apply: 'text-gray-900' }
  }
}
