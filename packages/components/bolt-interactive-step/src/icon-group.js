import { props, define, hasNativeShadowDomSupport } from '@bolt/core/utils';
import { withLitHtml, html } from '@bolt/core';
import classNames from 'classnames/bind';
import styles from './icon-group.scss';

let cx = classNames.bind(styles);

@define
class BoltIconGroup extends withLitHtml() {
  static is = 'bolt-icon-group';

  static props = {
    noShadow: {
      ...props.boolean,
      ...{ default: false },
    },
    iconOneName: {
      ...props.string,
      ...{ default: 'eye' },
    },
    iconTwoName: {
      ...props.string,
      ...{ default: 'eye' },
    },
    iconThreeName: {
      ...props.string,
      ...{ default: 'eye' },
    },
    iconColor: {
      ...props.string,
      ...{ default: 'teal' },
    },
    iconBackgroundColor: {
      ...props.string,
      ...{ default: 'white' },
    },
  };

  constructor(self) {
    self = super(self);
    self.useShadow = hasNativeShadowDomSupport;
    return self;
  }

  render() {
    const {
      iconOneName,
      iconTwoName,
      iconThreeName,
      iconColor,
      iconBackgroundColor,
    } = this.validateProps(this.props);
    const classes = cx('c-bolt-icon-group');

    const iconStyles = `
              color: ${iconColor};
              --bolt-theme-icon-background: ${iconBackgroundColor};
              --bolt-theme-icon: ${iconColor};
              --bolt-theme-icon-background-opacity: 1;
            `;

    return html`
      ${this.addStyles([styles])}
      <div class="${classes}" is="shadow-root">
        <bolt-stack>
          <bolt-icon background="circle" size="xlarge" name="${iconOneName}" style="${iconStyles}"></bolt-icon>
          <bolt-icon background="circle" size="xlarge" name="${iconTwoName}" style="${iconStyles}"></bolt-icon>
          <bolt-icon background="circle" size="xlarge" name="${iconThreeName}" style="${iconStyles}"></bolt-icon>
        </bolt-stack>
      </div>
    `;
  }
}

export { BoltIconGroup };
