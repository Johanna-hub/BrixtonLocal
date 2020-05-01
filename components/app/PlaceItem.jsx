import React from 'react';
import styled from 'styled-components';

import { isLast } from '../utils';

import { Box, Text, Image } from '../atoms';
import { Row } from '../molecules';
import _ from "lodash";

import Link from './Link';

const PlaceImage = ({ source, ...props }) => (
  <Image width="100%" source={source} {...props} />
);

const CategoryName = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  color: rgba(103, 128, 159, 1);
`;

const CollectionMethod = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  text-align: center;
  color: rgba(103, 128, 159, 1);
`;

const PlaceName = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 21px;
  color: #000000;
`;

const TagText = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

const Tag = ({ type, ...props }) => (
  <Box bg="rgba(103, 128, 159, 1)" py={1} px={16} borderRadius={4} {...props}>
    <TagText color="#fff">
      {type}
    </TagText>
  </Box>
)

const PlaceInfo = ({ name, category, tags, collection, delivery }) => (
  <Box width="100%">
    <Row width="100%" justifyContent="space-between" mt={2} mb={1}>
      <Link to={`/category/${_.kebabCase(category)}`} style={{ textDecoration: 'none', "margin-bottom":"8px" }}>
        <CategoryName>
          {(category || '').toUpperCase()}
        </CategoryName>
      </Link>
      <CollectionMethod>
        {(delivery === "TRUE" ? "Delivery" : '')}
        {(collection === "TRUE" && delivery === "TRUE" ? " & Collection" : collection === "TRUE" ? "Collection" : '')}
      </CollectionMethod>
    </Row>
    <PlaceName mb={2}>
    <Link to={`/business/${_.kebabCase(name)}`} style={{ textDecoration: 'none', "color":"black" }}>{name}</Link>
    </PlaceName>
    {tags && (
      <Row flexWrap="wrap">
        {(tags || []).map((tag, i) => (
          <Link to={`/tag/${_.kebabCase(tag)}`} style={{ textDecoration: 'none', "margin-top":"8px" }}>
            <Tag key={i} type={tag} mr={!isLast(i, tags.length) ? 2 : 0} />
          </Link>
        ))}
      </Row>
    )}
  </Box>
);

const PlaceItemContainer = ({ children, ...props }) => (
  <Box width={['100%', 'calc(50% - 16px)', 'calc(33.33333% - 16px)']} mx={[null, 8]} {...props}>
    {children}
  </Box>
);

// const ItemBox = styled(Box)`
// flex-basis: 25%;
// margin: 16px;
// `

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
  place: {
    name: 'Ashby\'s Shop',
    category: 'groceries',
    source: 'https://media-cdn.tripadvisor.com/media/photo-s/15/7d/ca/8a/bakery.jpg',
    tags: ['Fruit & Veg', 'Bread'],
  },
};

export default PlaceItem;
