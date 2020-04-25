import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import AllNames from './AllNames';
import styled from 'styled-components';

const NameContainer = styled.div`
margin-top: 8vh;
padding-left: 1rem;
margin-left: 8px;
`
const NamesMenu = ({ items: names, ...props }) => (
  <Box {...props}>
    <NameContainer>
      {names && names.map((name, i) => (
        <AllNames
          key={i}
          name={name}
          mb={(!isLast(i, names.length)) ? 4 : 0}
        />
      ))}
    </NameContainer>
  </Box>
);

export default NamesMenu;