import React from "react"
import styled from 'styled-components'
import { Box } from '../atoms';

const AboutText = styled.p`
font-family: SF Pro Text;
font-size: 18px;
`
const AboutContainer = styled.div`
margin: 2vh;
margin-top: 10vh;
`
const AboutLink = styled.a`
color:rgba(103, 128, 159, 1);
`

const About = () => {
  return (
      <Box>
        <AboutContainer>
          <AboutText>Brixton Local.Life is part of the <AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> project.</AboutText>
          <AboutText><AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> supports local communities during the COVID-19 lockdown by helping them easily set up websites that spread the word about independent businesses and services in their area.</AboutText>  
          <AboutText>This includes businesses that are still operational, new delivery services and other activities, such as community groups and local support.</AboutText>
          <AboutText>The information on this website was crowdsourced using a google spreadsheet.  For access to the spreadsheet to update an existing entry or add a new one, please request access <AboutLink href = "mailto: brixtonlocal@gmail.com">here</AboutLink>.</AboutText>
          <AboutText>To set up a similar project in your area please go to the <AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> website.</AboutText>
          <AboutText>To get in contact please  <AboutLink href = "mailto: brixtonlocal@gmail.com">email</AboutLink> us.</AboutText>
        </AboutContainer>
      </Box>
  )
}

export default About