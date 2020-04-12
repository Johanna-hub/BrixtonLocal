import React from 'react';
import styled from 'styled-components';

import { isLast } from '../utils';

import { Text, Box } from '../atoms';
import { Row } from '../molecules';

import FillBox from './FillBox';
import FillImage from './FillImage';

const CategoryTitle = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const CategoryNumber = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;

  text-align: center;

  color: #FFFFFF;
`;

const CategoryImage = ({ source, count, ...props }) => (
  <Box width="100%" justifyContent="center" alignItems="center" {...props}>
    <FillBox />
    <FillImage source={source} />
    {count && (
      <CategoryNumber>
        {count}
      </CategoryNumber>
    )}
  </Box>
);
CategoryImage.defaultProps = {
  width: 100,
  height: 80,
};

const CategoryTile = ({ item: { name, count }, ...props }) => (
  <Box {...props}>
    <CategoryImage count={count} />
    <CategoryTitle my={1}>
      {name}
    </CategoryTitle>
  </Box>
);

const CategoriesHeading = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const CategoryList = ({ title, items, ...props }) => (
  <Box p={3} {...props}>
    <CategoriesHeading mb={3}>
      {title}
    </CategoriesHeading>
    <Row flexWrap="wrap">
      {items.map((item, i) => (
        <CategoryTile mr={!isLast(i, items.length) ? 2 : 0} item={item} />
      ))}
    </Row>
  </Box>
);

export default CategoryList;
