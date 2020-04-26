import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import AllCategories from './AllCategories';
import styled from 'styled-components';

const CategoryContainer = styled.div`
margin-top: 10vh;
padding-left: 1rem;
margin-left: 8px;
`
const CategoryMenu = ({ items: categories, ...props }) => (
  <Box {...props}>
  <CategoryContainer>
      {categories && categories.map((category, i) => (
        <AllCategories
          key={i}
          category={category}
          mb={(!isLast(i, categories.length)) ? 4 : 0}
        />
      ))}
    </CategoryContainer>
  </Box>
);

export default CategoryMenu;