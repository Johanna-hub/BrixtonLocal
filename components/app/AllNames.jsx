import React from 'react';

import { Box } from '../atoms';
import _ from "lodash";

import Link from './Link';

const AllNames = ({ name }) => {
 
  return (
      <Box>
        <Link to={`/business/${_.kebabCase(name)}`}>{name}
        </Link>
      </Box>
  )}

AllNames.defaultProps = {
    name: 'Ashbys', 
  }

export default AllNames;