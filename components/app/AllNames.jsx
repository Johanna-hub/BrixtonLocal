import React from 'react';

import { Box } from '../atoms';
import _ from "lodash";

import Link from './Link';
import styled from 'styled-components';

const NameLink = styled(Link)`
  font-family: SF Pro Text;
  font-style: normal;
  font-size: 24px;
`;

const AllNames = ({ name }) => {
 
  return (
      <Box>
        <NameLink to={`/business/${_.kebabCase(name)}`} style={{ textDecoration: 'none', color : "inherit" }}>{name}
        </NameLink>
      </Box>
  )}

AllNames.defaultProps = {
    name: 'Ashbys', 
  }

export default AllNames;