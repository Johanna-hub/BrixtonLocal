import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { isLast } from '../utils';

import { Box, Text, Image } from '../atoms';
import { Row } from '../molecules';

import Link from './Link';
import Tag from './Tag';

export const PlaceImage = ({ source, ...props }) => (
  <Image flex={1} minHeight={360} source={source} {...props} />
);

export const CategoryName = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  color: #878787;
`;

export const CollectionMethod = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

export const PlaceName = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;



const PlaceInfo = ({ name, category, tags, collection, delivery }) => (
  <Box width="100%">
    <Row width="100%" justifyContent="space-between" mt={2} mb={1}>
      <CategoryName>
        {(category || '').toUpperCase()}
      </CategoryName>
      <CollectionMethod>
        {(delivery === "TRUE" ? "Delivery" : '')}
        {(collection === "TRUE" && delivery === "TRUE" ? " & Collection" : collection === "TRUE" ? "Collection" : '')}
      </CollectionMethod>
    </Row>
    <PlaceName mb={2}>
    <Link to={`/business/${_.kebabCase(name)}`} style={{ textDecoration: 'none' }}>{name}</Link>
    </PlaceName>
    {tags && (
      <Row flexWrap="wrap">
        {(tags || []).map((tag, i) => (
          <Tag key={i} type={tag} mr={!isLast(i, tags.length) ? 2 : 0} />
        ))}
      </Row>
    )}
  </Box>
);

const PlaceItemContainer = ({ children, ...props }) => (
  <Box flex={1} {...props}>
    {children}
  </Box>
);

const parseImageSource = (url) => {
  const isDriveUrl = url.includes('drive.google.com');

  if (isDriveUrl) {
    return `http://drive.google.com/uc?export=view&id=${url.split('=')[1]}`
  }


  return url;
};

const PlaceItem = ({ children, place: { name, category, source: _source, tags, collection, delivery }, ...props }) => {
  const source = parseImageSource(_source);

  return (
    <PlaceItemContainer {...props}>
      <Link to={`/business/${_.kebabCase(name)}`}>
        <PlaceImage flex={1} source={source} />
      </Link>
      <PlaceInfo name={name} category={category} tags={tags} collection={collection} delivery={delivery} />
    </PlaceItemContainer> 
  );
}

PlaceItem.defaultProps = {
  name: 'PlaceItem',
  place: {
    name: 'Ashby\'s Shop',
    category: 'groceries',
    source: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    tags: ['Fruit & Veg', 'Bread'],
  },
};

export default PlaceItem;
