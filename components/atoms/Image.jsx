import styled from 'styled-components';
import { compose, space, color, border, layout, position, flexbox } from 'styled-system';

import { Image as _Image } from '../primitives';

const Image = styled(_Image)`
  ${compose(space, color, border, layout, position, flexbox)}
`;

Image.defaultProps = {
  display: 'flex',
}

export default Image;
