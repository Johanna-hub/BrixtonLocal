import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import AllCategories from './AllCategories';
import styled from 'styled-components';

const CategoryBox = styled(Box)`
  align-items: center;
  @media (max-width: 768px) {
  align-items: flex-start;
  }
`

const CategoryContainer = styled.div`
  padding-top: 10.1vh;
  padding-left: 1rem;
  margin-left: 8px;
`
const CategoryMenu = ({ items: categories, ...props }) => (
  <CategoryBox {...props} style={{}}>
  <CategoryContainer>
      {categories && categories.map((category, i) => (
        <AllCategories
          key={i}
          category={category}
          mb={(!isLast(i, categories.length)) ? 4 : 0}
        />
      ))}
    </CategoryContainer>
  </CategoryBox>
);

export default CategoryMenu;