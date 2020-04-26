import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import PlaceItem from './PlaceItem';
import styled from 'styled-components';

const PlaceBox = styled(Box)`
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
@media (max-width: 768px) {
 flex-direction:column;
 flex-wrap:no-wrap;
}
`

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
