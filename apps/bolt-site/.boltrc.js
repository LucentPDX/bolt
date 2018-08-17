module.exports = {
  // Environmental variable / preset to use
  lang: ['en'],
  env: 'static',
  buildDir: '../../www/build/',
  srcDir: './content',
  wwwDir: '../../www',
  images: {
    sets: [
      {
        base: './images',
        glob: '**',
        dist: '../../www/images/',
      },
    ],
  },
  components: {
    global: [
      '@bolt/core',
      '@bolt/global',
      '@bolt/components-page-footer',
      '@bolt/components-page-header',
      '@bolt/components-site',
      '@bolt/components-action-blocks',
      '@bolt/components-band',
      '@bolt/components-blockquote',
      '@bolt/components-button',
      '@bolt/components-button-group',
      '@bolt/components-card',
      '@bolt/components-chip',
      '@bolt/components-chip-list',
      '@bolt/components-icon',
      '@bolt/components-headline',
      '@bolt/components-link',
      '@bolt/components-logo',
      '@bolt/components-teaser',
      '@bolt/components-image',
      './style.scss',
    ],
    individual: [],
  },
  extraTwigNamespaces: {
    'bolt-assets': {
      recursive: true,
      paths: ['../../www/build'],
    },
  },
  criticalCss: {
    // target docs site-specific HTML, omit anything pattern lab related
    urls: ['*.html', 'docs/**/*.html', '!**/*.markup-only.html'],
  },
};
