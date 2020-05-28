import React from 'react';
import styled from 'styled-components';
import _ from "lodash";
import chroma from 'chroma-js';

import { isLast } from '../utils';
import { useHover } from '../hooks';

import { Box, Text, Image } from '../atoms';
import { Row } from '../molecules';
import FillBox from './FillBox';
import Tag from './Tag';

import Link from './Link';

/*const PlaceImage = ({ source, ...props }) => (
  <Image style={{ backgroundImage: `url(${source})`, width: "auto"}} {...props}  />
);*/

const PlaceImage = React.forwardRef(({ source, ...props }, ref) => (
  <Image ref={ref} style={{ backgroundImage: `url(${source})`, width: "auto"}} {...props}/>
));
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



const PlaceInfo = ({ name, category, tags, collection, delivery }) => {
  const finTags = tags.map(tag => {
    const newTag =  tag.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );

    return newTag.replace(
      /\+\S*/g,
      txt => "+" + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase(),
    );

  });


  return (
  <Box width="100%">
    <Row width="100%" justifyContent="space-between" mt={2} mb={1}>
      <Link to={`/category/${_.kebabCase(category)}`} style={{ textDecoration: 'none', "margin-bottom": "8px" }}>
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
      <Link to={`/business/${_.kebabCase(name)}`} style={{ textDecoration: 'none', "color": "black" }}>{name}</Link>
    </PlaceName>
    {tags && (
      <Row flexWrap="wrap">
        {(finTags || []).filter(i => i).map((tag, i) => {
          if (tag.trim()) {
            return (
              <Link to={`/tag/${_.kebabCase(tag)}`} style={{ textDecoration: 'none', "margin-top": "8px" }}>
                <Tag key={i} type={tag} mr={!isLast(i, tags.length) ? 2 : 0}/>
              </Link>
            )
          }
        })}
      </Row>
    )}
  </Box>
  )
};

const PlaceItemContainer = ({ children, ...props }) => (
  <Box width={['100%', 'calc(50% - 16px)', 'calc(33.33333% - 16px)']} mx={[null, 8]} {...props}>
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
  const [hoverRef, isHovering] = useHover();

  return (
    <PlaceItemContainer {...props}>
      <Link to={`/business/${_.kebabCase(name)}`} style={{ position: 'relative' }}>
        {isHovering && (
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.25)"
            style={{ pointerEvents: 'none' }}
            justifyContent="center"
            alignItems="center"
            zIndex={100}
          >
            <Text color="white" fontSize={16} fontFamily="Montserrat" fontWeight="bold">SEE MORE INFO ></Text>
          </Box>
        )}
        <PlaceImage ref={hoverRef} flex={1} source={source} />
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
