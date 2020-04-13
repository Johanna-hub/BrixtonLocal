import { extendStyles } from '../utils';

import { Box } from '../atoms';

const FillBox = extendStyles(Box, () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  bg: 'rgba(0, 0, 0, 0.15)'
}));

export default FillBox;
