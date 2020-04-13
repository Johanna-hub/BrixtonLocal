import styled from 'styled-components';
import { Platform } from 'react-primitives';
import { get, system } from '@styled-system/core';
import {
  compose,
  style,
  typography,
  color,
  textStyle,
  space,
  layout,
  flexbox,
} from 'styled-system';

import { Text as _Text} from '../primitives';

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
});

const isNumber = (n) => typeof n === 'number' && !Number.isNaN(n);

const getLineHeight = (n, scale) => {
  const val = get(scale, n, n);

  return (Platform.OS === 'web' || Platform.OS === 'figma') && isNumber(val) ? `${val}px` : val;
};

const lineHeight = system({
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
    transform: getLineHeight,
  },
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
