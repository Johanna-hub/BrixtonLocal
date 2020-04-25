import React from 'react';

import { Box } from '../atoms';
import _ from "lodash";

import Link from './Link';

const AllCategories = ({ category }) => {
 
  return (
      <Box>
        <Link to={`/category/${_.kebabCase(category)}`}>{category}
        </Link>
      </Box>
  )}

AllCategories.defaultProps = {
    category: 'groceries', 
  }

export default AllCategories;