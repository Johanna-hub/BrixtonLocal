import React from "react";
import styled, { useTheme } from 'styled-components';

import { useWindowDimensions } from '../hooks';
import { Box, Text } from '../atoms';
import theme from '../theme';


const HeaderTitle = styled(Text)`
font-family: Raleway;
font-style: normal;
font-weight: bold;
font-size: 48px;
text-align: center;
margin-bottom: 0.75rem;
margin-top: 0.75rem;
`
const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2vh;
margin-top: 4vh;
@media (max-width: 768px) {
  margin-top: 10.1vh;
 }
`
const HeaderText = styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 27px;
text-align: center;
max-width: 600px;
`

/* This renders a line break for mobile only */
/* This is good for SEO – keeps both lines inside the same h1 element */
const Br = () => {
  const { width } = useWindowDimensions();
  const { breakpoints } = useTheme();

  const maxBreakpointWidth = Number(breakpoints.mobile.replace('px', ''));

  return (
    <span style={{
      ...(width <= maxBreakpointWidth  && { display: 'block' })
    }} />
  );
}

const Header = () => {
  return (
    <Box minHeight={[390, 390, 200]}>
      <HeaderContainer>
       <HeaderTitle as="h1" fontSize={[48, 48, 64]}>Brixton<br />Local.Life</HeaderTitle>
       <HeaderText>Getting the word out for the local community and businesses during the COVID-19 lockdown</HeaderText>
       </HeaderContainer>
      </Box>
  )
}

export default Header
