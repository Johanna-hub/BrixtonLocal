import styled from 'styled-components';
import { system } from '@styled-system/core';
import { compose, space, color, border, layout, position, flexbox, backgroundImage } from "styled-system"
import { Platform } from 'react-primitives';

import { div as _div } from '../primitives';

const objectFit = system({
  objectFit: {
    property: 'objectFit',
    scale: 'objectFit',
  },
});


const Image = styled(_div)`
     width: 100%; 
     padding-top: 100%;
     position: relative;
     background-size: cover;
`;



// Image.defaultProps = {
//   display: 'flex',
//   objectFit: 'cover',
//   // objectPosition: '50% 50%',
// }

export default Image;
