import React from 'react';
import styled from 'styled-components';
import _ from "lodash";

import { Tag } from '#components/app'
import Link from './Link';


const AllTags = ({ tag }) => {
 
  return (
    <Link to={`/tag/${_.kebabCase(tag)}`}>
      <Tag type={tag} />
    </Link>
  );
};

AllTags.defaultProps = {
  tag: 'bread', 
};

export default AllTags;
