import { polyfillLoader } from '@bolt/core';

polyfillLoader.then(res => {
  import(/* webpackMode: 'lazy', webpackChunkName: 'bolt-icon' */ './icon.standalone.js');
});
