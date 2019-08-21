import { props, define, hasNativeShadowDomSupport } from '@bolt/core/utils';
import { withPreact, h } from '@bolt/core/renderers';
import * as SVG from './svg';
import schema from '../svg-animations.schema.yml';

@define
class SVGAnimations extends withPreact() {
  static is = 'bolt-svg-animations';

  static props = {
    speed: props.integer,
    animType: props.string,
    theme: props.string,
  };

  constructor(self) {
    self = super(self);
    self.schema = schema;
    this.useShadow = hasNativeShadowDomSupport;
    return self;
  }

  render() {
    const animType = this.getAttribute('animType');
    const speed = this.getAttribute('speed');
    const theme = this.getAttribute('theme');
    const SVGTag = SVG[`${animType}`];

    return (
      <div>
        <SVGTag speed={speed} theme={theme} />
      </div>
    );
  }
}

export { SVGAnimations };
