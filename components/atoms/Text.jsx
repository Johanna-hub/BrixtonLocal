import styled from 'styled-components';
import {
  compose,
  style,
  typography,
  color,
  textStyle,
  space,
  layout,
  lineHeight,
  flexbox,
} from 'styled-system';

import { Text as _Text} from '../primitives';

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
});

const Text = styled(_Text).withConfig({
  shouldForwardProp: (propName) => !['lineHeight', 'fontSize', 'bold', 'color'].includes(propName),
})`
  ${compose(
    typography,
    color,
    textStyle,
    space,
    layout,
    textTransform,
    lineHeight,
    flexbox,
  )}
`;


Text.defaultProps = {
  fontSize: 16,
};

export default Text;
