import { loadPolyfills } from './utils/polyfills';

loadPolyfills.then(res => {
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-nav' */ './components/pl-nav/pl-nav');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-logo' */ './components/pl-logo/pl-logo');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-layout' */ './components/pl-layout/pl-layout');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-controls' */ './components/pl-controls/pl-controls');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-drawer' */ './components/pl-drawer/pl-drawer');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-header' */ './components/pl-header/pl-header');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-iframe' */ './components/pl-viewport/pl-viewport');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-search' */ './components/pl-search/pl-search');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-toggle-info' */ './components/pl-toggle-info/pl-toggle-info');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-toggle-layout' */ './components/pl-toggle-layout/pl-toggle-layout');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-toggle-theme' */ './components/pl-toggle-theme/pl-toggle-theme');
  import(/* webpackMode: 'eager', webpackChunkName: 'pl-tools-menu' */ './components/pl-tools-menu/pl-tools-menu');
  import(/* webpackMode: 'lazy', webpackChunkName: 'pl-modal-viewer' */ './components/modal-viewer');
  import(/* webpackMode: 'lazy', webpackChunkName: 'pl-styleguide' */ './components/styleguide');
});

import './components/panels';
import './components/panels-viewer';
import './components/plugin-loader';

//// Add hook to auto re-render the root component.
if (typeof module.hot === 'object') {
  module.hot.accept(err => {
    if (err) {
      console.error('Cannot apply HMR update.', err);
    }
  });
}
