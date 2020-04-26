import React from "react"
import styled from 'styled-components'
import { Box } from '../atoms';

const HeaderTitle = styled.p`
color: rgba(103, 128, 159, 1);
font-family: Raleway;
font-style: normal;
font-weight: bold;
font-size: 48px;
text-align: center;
margin: 0;
@media (max-width: 768px) {
    margin-top: 10.1vh;
   }
`
const HeaderContainer = styled(Box)`
margin: 2vh;
`

const CategoryTitle = ({items: category}) => {
  return (
      <HeaderContainer>
       <HeaderTitle>{category}</HeaderTitle>
       </HeaderContainer>
  )
}

export default CategoryTitle