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

const NameBox = styled(Box)`
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
   }
`

const AllNames = ({ name }) => {
 
  return (
      <NameBox>
        <NameLink to={`/business/${_.kebabCase(name)}`} style={{ textDecoration: 'none', color : "inherit" }}>{name}
        </NameLink>
      </NameBox>
  )}

AllNames.defaultProps = {
    name: 'Ashbys', 
  }

export default AllNames;