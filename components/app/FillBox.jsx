import styled from 'styled-components';

import { extendStyles } from '../utils';

import { Box } from '../atoms';

const FillBox = extendStyles(Box, () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  bg: 'rgba(0, 0, 0, 0.25)',
  zIndex: 9,
  ':hover': {
    bg: 'rgba(0, 0, 0, 0.35)',
  }
}));

export default FillBox;
