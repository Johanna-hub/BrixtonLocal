import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import AllTags from './AllTags';
import styled from 'styled-components';

const TagContainer = styled.div`
margin-top: 10vh;
flex-direction: row;
flex-flow: row-wrap;
margin-left: 1.5rem;
`
const TagMenu = ({ items: tags, ...props }) => (
  <TagContainer {...props}>
      {tags && tags.map((tag, i) => (
        <AllTags
          key={i}
          tag={tag}
          mb={(!isLast(i, tags.length)) ? 4 : 0}
        />
      ))}
  </TagContainer>
);

export default TagMenu;