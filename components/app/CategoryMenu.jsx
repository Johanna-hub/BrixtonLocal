import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import AllCategories from './AllCategories';
import styled from 'styled-components';

const CategoryContainer = styled.div`
margin-top: 20%
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