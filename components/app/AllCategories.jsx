import React from 'react';

import { Box } from '../atoms';
import _ from "lodash";

import Link from './Link';
import styled from 'styled-components';

const LinkLabel = styled.span`
background-color: rgba(103, 128, 159, 1);
margin-bottom: 16px;
padding-left: 1.5rem;
width: 200px;
height: 30px;
left: 32px;
top: 161px;
border-radius: 10px;
text-align: center;
display: inline-flex;
align-items: center;
`
const CategoryLink = styled(Link)`
  font-family: SF Pro Text;
  font-style: normal;
  font-size: 24px;
  line-height: 10px;
  color: #FFFFFF
`;

const AllCategories = ({ category }) => {
 
  return (
      <Box>
      <LinkLabel>
        <CategoryLink to={`/category/${_.kebabCase(category)}`} style={{ textDecoration: 'none' }}>{category}
        </CategoryLink>
        </LinkLabel>
      </Box>
  )}

AllCategories.defaultProps = {
    category: 'groceries', 
  }

export default AllCategories;