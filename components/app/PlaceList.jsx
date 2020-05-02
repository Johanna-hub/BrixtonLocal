import React from 'react';

import { isLast, extendStyles } from '../utils';

import { Box } from '../atoms';
import PlaceItem from './PlaceItem';

const PlaceBox = extendStyles(Box, () => ({
  justifyContent: 'space-around',
  flexDirection: ['column', 'row'],
  flexWrap: ['no-wrap', 'wrap'],
}));


const PlaceList = ({ items: places, style, ...props }) => (
  <PlaceBox {...props}>
    {places && places.map((place, i) => (
      <PlaceItem
        key={i}
        place={place}
        mb={(!isLast(i, places.length)) ? 4 : 0}
        {...style}
      />
    ))}
  </PlaceBox>
);

export default PlaceList;
