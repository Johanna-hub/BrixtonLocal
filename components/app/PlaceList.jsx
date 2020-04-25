import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import PlaceItem from './PlaceItem';

const PlaceList = ({ items: places, style, ...props }) => (
  <Box {...props} style={{"margin-top": "10.1vh"}}>
    {places && places.map((place, i) => (
      <PlaceItem
        key={i}
        place={place}
        mb={(!isLast(i, places.length)) ? 4 : 0}
        {...style}
      />
    ))}
  </Box>
);

export default PlaceList;
