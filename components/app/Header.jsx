import React from "react"
import styled from 'styled-components'
import { Box } from '../atoms';

const HeaderTitle = styled.p`
font-family: Raleway;
font-style: normal;
font-weight: bold;
font-size: 48px;
text-align: center;
margin-bottom: 0.75rem;
margin-top: 0.75rem;
`
const HeaderContainer = styled.div`
margin: 2vh;
margin-top: 8vh;
`
const HeaderText = styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 27px;
text-align: center;
`

const Header = () => {
  return (
      <Box>
      <HeaderContainer>
       <HeaderTitle>Brixton</HeaderTitle>
       <HeaderTitle>Local.Life</HeaderTitle>
       <HeaderText>Getting the word out for the local community and businesses during the COVID-19 lockdown</HeaderText>
       </HeaderContainer>
      </Box>
  )
}

export default Header