import React from 'react';
import styled from 'styled-components';

import { isLast } from '../utils';

import { Box, Text, Image } from '../atoms';
import { Row } from '../molecules';

import { PlaceImage, CategoryName, CollectionMethod, PlaceName } from './PlaceItem';
import Tag from './Tag';

const BusinessSocialMedia = ({ instagram, twitter, facebook }) => (
  <>
    {instagram && (
      <Text as_="a" href={`${instagram}`}>Instagram</Text>
    )}
    {twitter && (
      <Text as_="a" href={`${twitter}`}>Twitter</Text>
    )}
    {facebook && (
      <Text as_="a" href={`${facebook}`}>Facebook</Text>
    )}
  </>
);


const PlaceInfo = ({ name, category, tags, collection, delivery, description, address, lockdown, ordering, ordering_hours, website, facebook, instagram, twitter }) => (
  <Box flex={1}>
    <Row flex={1} justifyContent="space-between" mt={2} mb={1}>
      <CategoryName>
        {(category || '').toUpperCase()}
      </CategoryName>
      <CollectionMethod>
        {(delivery === "TRUE" ? "Delivery" : '')}
        {(collection === "TRUE" && delivery === "TRUE" ? " & Collection" : collection === "TRUE" ? "Collection" : '')}
      </CollectionMethod>
    </Row>
    <Box>
      <PlaceName mb={2}>
      {name}
      </PlaceName>
      <Text>
      {address}
      </Text>
      {description && (
        <Text>{description}</Text>
      )}
      {lockdown && (
        <Text>Lockdown services: {lockdown}</Text>
      )}
      <Text>{(ordering ? `How to order: ${ordering}.  ${ordering_hours}` : "")}</Text>
      <Text as_="a" href={`${website}`}>{website}</Text>
      <BusinessSocialMedia instagram={instagram} twitter={twitter} facebook={facebook} />
    </Box>
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
  <Box {...props}>
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

const BusinessInfo = ({ place: { name, category, tags, collection, delivery, description, source: _source, address, lockdown, ordering, ordering_hours, website, facebook, instagram, twitter }, ...props }) => {
    const source = parseImageSource(_source);

  return (
    <PlaceItemContainer {...props}>
      <PlaceImage flex={1} source={source} />
      <PlaceInfo name={name} category={category} tags={tags} collection={collection} delivery={delivery} description={description} address={address} lockdown={lockdown} ordering={ordering} ordering_hours={ordering_hours} website={website} facebook={facebook} instagram={instagram} twitter={twitter} />
    </PlaceItemContainer> 
  );
}

BusinessInfo.defaultProps = {
  place: {
    name: 'Ashby\'s Shop',
    category: 'groceries',
    source: 'https://media-cdn.tripadvisor.com/media/photo-s/15/7d/ca/8a/bakery.jpg',
    tags: ['Fruit & Veg', 'Bread'],
  },
};

export default BusinessInfo;
