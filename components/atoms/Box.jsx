import React from 'react';
import styled from 'styled-components';
import { compose, space, color, border, layout, position, flexbox } from 'styled-system';

import { View } from '../primitives';
import { useHover } from '../hooks';

const Box = styled(View)`
  ${compose(space, color, border, layout, position, flexbox)}
`;

Box.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
}

export default function BoxContainer(props) {
  const [hoverRef, isHovered] = useHover();

  return <Box ref={hoverRef} {...props} {...(isHovered && props.styles && props.styles.hover)} />;
};
