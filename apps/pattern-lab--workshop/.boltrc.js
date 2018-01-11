module.exports = {
  env: 'pl',
  plConfigFile: './config/config.yml',
  dist: './dist/assets',
  components: {
    global: [
      '@bolt/core',
      '@bolt/global',
      '@bolt/components-action-blocks',
      '@bolt/components-background',
      '@bolt/components-background-shapes',
      '@bolt/components-button'
    ],
    individual: [
    ],
  },
};
