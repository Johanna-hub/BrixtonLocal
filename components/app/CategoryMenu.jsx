import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import AllCategories from './AllCategories';
import styled from 'styled-components';

const CategoryContainer = styled.div`
margin-top: 8vh;
`

const CategoryTitle = styled.p`
text-align: left;
font-family: SF Pro Text;
font-size: 24px;
margin-bottom: 24px;
margin-top: 0px;
`

const CategoryMenu = ({ items: categories, ...props }) => (
  <Box {...props}>
  <CategoryContainer>
  <CategoryTitle>Explore By Category</CategoryTitle>
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