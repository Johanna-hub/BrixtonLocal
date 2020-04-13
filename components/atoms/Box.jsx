import styled from 'styled-components';
import { compose, space, color, border, layout, position, flexbox } from 'styled-system';

import { View } from '../primitives';

const Box = styled(View)`
  ${compose(space, color, border, layout, position, flexbox)}
`;

Box.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
}

export default Box;
