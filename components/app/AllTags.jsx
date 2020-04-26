import React from 'react';

import _ from "lodash";

import Link from './Link';
import styled from 'styled-components';

const TagLabel = styled.span`
background-color: rgba(103, 128, 159, 1);
margin: 8px;
padding: 0.5rem;
height: 24px;
border-radius: 10px;
display: inline-flex;
align-items: center;
`
const TagLink = styled(Link)`
  font-family: SF Pro Text;
  font-style: normal;
  font-size: 16px;
  line-height: 10px;
  color: #FFFFFF
`;

const AllTags = ({ tag }) => {
 
  return (
      <span>
        <TagLabel>
          <TagLink to={`/tag/${_.kebabCase(tag)}`} style={{"text-decoration":"none",  "text-transform": "capitalize"}}>{tag}
          </TagLink>
        </TagLabel>
      </span>
  )}

AllTags.defaultProps = {
    tags: 'bread', 
  }

export default AllTags;