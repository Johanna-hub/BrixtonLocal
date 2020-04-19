import React from 'react';
import styled from 'styled-components';
import { Platform } from 'react-primitives';

import { isLast } from '../utils';

import { Text, Box } from '../atoms';
import { Row } from '../molecules';

import FillBox from './FillBox';
import FillImage from './FillImage';
import _ from "lodash";

import Link from './Link';

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
  z-index: 5; /* Not sure why this is needed? ... Here come exponentially increasing z-index overrides... */
`;

const CategoryImage = ({ source, count, ...props }) => (
  <Box
    justifyContent="center"
    alignItems="center"
    position="relative"
    {...(Platform.OS === 'figma' ? { width: '100%' } : { flex: 1} )}
    {...props}
  >
    <FillBox />
    <FillImage source={source} />
    <Box justifyContent="center" flex={1}>
      {count && (
        <CategoryNumber>
          {count}
        </CategoryNumber>
      )}
    </Box>
  </Box>
);
CategoryImage.defaultProps = {
  width: 100,
  height: 80,
};

const CategoryTile = ({ item: { name, count }, ...props }) => (
  <Box {...props}>
  <Link to={`/category/${_.kebabCase(name)}`} style={{ textDecoration: 'none' }}>
    <CategoryImage count={count} />
    <CategoryTitle my={1}>
      {name}
    </CategoryTitle>
    </Link>
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
    <Row overflow="scroll">
      {(items || []).map((item, i) => (
        <CategoryTile key={(item && item.name) || i} mr={!isLast(i, items.length) ? 2 : 0} item={item} />
      ))}
    </Row>
  </Box>
);

export default CategoryList;
