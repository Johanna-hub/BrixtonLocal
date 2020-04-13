import { extendStyles } from '../utils';

import { Image } from '../atoms';

const FillImage = extendStyles(Image, () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}));

export default FillImage;
