import React from 'react';

import { Box } from '../atoms';
import _ from "lodash";

import Link from './Link';

const AllTags = ({ tag }) => {
 
  return (
      <Box>
        <Link to={`/tag/${_.kebabCase(tag)}`}>{tag}
        </Link>
      </Box>
  )}

AllTags.defaultProps = {
    tags: 'bread', 
  }

export default AllTags;