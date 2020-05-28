import React from 'react';
import _ from 'lodash';
import { isLast } from '../utils';

import Tag from './Tag';
import Link from './Link';
import styled from 'styled-components';

const TagContainer = styled.div`
  padding-top: 4vh;
  flex-direction: row;
  flex-flow: row-wrap;
  margin-left: 12rem;
  margin-right: 12rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    margin-left: 1.5rem;
    margin-right: 1rem;
    padding-top:10.1vh;
   }
`
const TagMenu = ({ items: tags, ...props }) => (
  <TagContainer {...props}>
    {tags && tags.map((tag, i) => {

        const newTag =  tag.replace(
          /\w\S*/g,
          txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
        );

      const finTag =  newTag.replace(
        /\+\S*/g,
        txt => "+" + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase(),
      );

      if(tag) {
        return(
        <Link key={i} to={`/tag/${_.kebabCase(tag)}`}>
          <Tag mx={2} mb={(!isLast(i, tags.length)) ? 3 : 0} type={finTag}/>
        </Link>
        )
      }
      }
    )}
  </TagContainer>
);

export default TagMenu;
