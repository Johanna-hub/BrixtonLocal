import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import AllTags from './AllTags';
import styled from 'styled-components';

const TagContainer = styled.div`
margin-top: 20%
`

const TagMenu = ({ items: tags, ...props }) => (
  <Box {...props}>
    <TagContainer>
      {tags && tags.map((tag, i) => (
        <AllTags
          key={i}
          tag={tag}
          mb={(!isLast(i, tags.length)) ? 4 : 0}
        />
      ))}
    </TagContainer>
  </Box>
);

export default TagMenu;