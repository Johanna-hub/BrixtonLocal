import React from 'react';

import { isLast } from '../utils';

import AllTags from './AllTags';
import styled from 'styled-components';

const TagContainer = styled.div`
  padding-top: 4vh;
  flex-direction: row;
  flex-flow: row-wrap;
  margin-left: 12rem;
  margin-right: 12rem;
  @media (max-width: 768px) {
    margin-left: 1.5rem;
    margin-right: 1rem;
    padding-top:10.1vh;
   }
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