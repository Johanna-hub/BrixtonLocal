import React from 'react';
import styled from 'styled-components';

import { Text, Box } from '../atoms';

export const TagText = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
`;

const Tag = ({ type, ...props }) => (
  <Box bg="black" py={1} px={12} borderRadius={4} {...props}>
    <TagText color="#fff">
      {type}
    </TagText>
  </Box>
);

export default Tag;
