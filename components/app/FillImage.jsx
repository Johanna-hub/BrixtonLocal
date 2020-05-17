import { extendStyles } from '../utils';

import CategoryImage from './CategoryImage';

const FillImage = extendStyles(CategoryImage, () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  // opacity: 0.6
}));

export default FillImage;
