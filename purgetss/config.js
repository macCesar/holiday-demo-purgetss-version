// ./purgetss/config.js
module.exports = {
  purge: {
    mode: 'all',

    // These options are passed directly to PurgeTSS
    options: {
      legacy: false, // Generates & Purge tailwind.tss v5.x classes
      missing: true, // Report missing classes
      widgets: true, // Purge widgets too
      safelist: [], // Array of classes to keep
      plugins: [] // Array of properties to ignore
    }
  },
  theme: {
    extend: {
      colors: {
        primary: '#ce10cc'
      }
    },
    '.main-banner': {
      apply: [
        'bg-primary/35',
        'border-primary/75'
      ]
    },
    Label: {
      apply: 'text-gray-900'
    }
  }
};
