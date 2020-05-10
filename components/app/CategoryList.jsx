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
  color:black;
`;

const CategoryNumber = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 30px;

  text-align: center;

  color: #FFFFFF;
  z-index: 999; /* Not sure why this is needed? ... Here come exponentially increasing z-index overrides... */
  pointer-events: none;
`;

const CategoryBox = styled(Box)`
  margin-bottom: 3vh; 
  align-items: center;
  @media (max-width: 768px) {
   align-items: flex-start;
   overflow: scroll;
  }
`

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
    <Box py={[null, 'calc(50% - 30px)']} justifyContent="center" flex={1}>
      {count && (
        <CategoryNumber>
          {count}
        </CategoryNumber>
      )}
    </Box>
  </Box>
);
CategoryImage.defaultProps = {
  minWidth: 100,
  // height: [80, 100, 120],
  height: [80, 'auto'],
};

const CategoryTile = ({ item: { name, count, source }, ...props }) => (
  <Box {...props} flex={[null, 1]} style={{ textAlign: 'center' }}>
    <Link to={`/category/${_.kebabCase(name)}`} style={{ textDecoration: 'none' }}>
      <CategoryImage pb={3} count={count} source={source} />
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
  <CategoryBox alignItems="center" p={3} {...props}>
    <CategoriesHeading mb={3}>
      {title}
    </CategoriesHeading>
    <Row overflow="scroll" width={[null, '100%']} maxWidth={1280}>
      {(items || []).map((item, i) => (
        <CategoryTile key={(item && item.name) || i} mr={!isLast(i, items.length) ? 2 : 0} item={item} />
      ))}
    </Row>
  </CategoryBox>
);

export default CategoryList;
