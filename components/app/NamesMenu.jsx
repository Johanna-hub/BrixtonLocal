import React from 'react';

import { isLast } from '../utils';

import { Box } from '../atoms';
import AllNames from './AllNames';
import styled from 'styled-components';

const NameContainer = styled.div`
  margin-top: 4vh;
  padding-left: 1rem;
  margin-left: 8px;
  @media (max-width: 768px) {
    margin-left: 1.5rem;
    margin-right: 1rem;
    margin-top:10.1vh;
 }
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