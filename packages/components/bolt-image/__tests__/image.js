const { render } = require('@bolt/twig-renderer');
const { readYamlFileSync } = require('@bolt/build-tools/utils/yaml');
const { join } = require('path');
const schema = readYamlFileSync(join(__dirname, '../image.schema.yml'));

describe('<bolt-image> Component', async () => {
  test('<bolt-image> with ratio object compiles', async () => {
    const results = await render('@bolt-components-image/image.twig', {
      src: '/fixtures/1200x660.jpg',
      alt: 'A Rock Climber',
      lazyload: true,
    });
    expect(results.ok).toBe(true);
    expect(results.html).toMatchSnapshot();
  });

  test('<bolt-image> with ratio object and lazyloading disabled compiles', async () => {
    const results = await render('@bolt-components-image/image.twig', {
      src: '/fixtures/1200x660.jpg',
      alt: 'A Rock Climber',
      lazyload: false,
    });
    expect(results.ok).toBe(true);
    expect(results.html).toMatchSnapshot();
  });
});
