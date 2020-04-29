import React from "react"
import styled from 'styled-components'
import { Box } from '../atoms';

const AboutText = styled.p`
font-family: SF Pro Text;
font-size: 18px;
margin: 8px;
`
const AboutContainer = styled(Box)`
margin: 2vh;
margin-top: 4vh;
align-items: flex-start;
width: 75%;
@media (max-width: 768px) {
  margin-left: 1.5rem;
  margin-right: 1rem;
  margin-top:10.1vh;
  align-items: flex-start;
 }
`
const AboutLink = styled.a`
color:rgba(103, 128, 159, 1);
`

const About = () => {
  return (
      <Box>
        <AboutContainer>
          <AboutText>Brixton Local.Life kickstarted the <AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> project.  Check out the <AboutLink href="https://www.sydenhamlocal.life/">Sydenham</AboutLink> and <AboutLink href="https://www.lewishamlocal.life/">Lewisham</AboutLink> sites!</AboutText>  
          <AboutText>We started this website during the Covid-19 Lockdown to connect people with businesses and services still operating in Brixton, and to help businesses move online quickly.</AboutText>
          <AboutText>We thought if we could support local people and businesses in this small way, we might just come out of this stronger and more aware of what’s on offer in our amazing local area, and how they continued to serve us, even under the most difficult circumstances.</AboutText>
          <AboutText>We’ve defined Brixton pretty loosely, taking in bits of Herne Hill, Stockwell, Clapham and Streatham, depending on delivery areas, and so there’s a range of services.</AboutText>
          <AboutText>Obviously this is a fast-changing situation, so it’s always worth double checking websites and social media for the most up to date information.</AboutText>
          <AboutText>Please follow us on Instagram at <AboutLink href="https://www.instagram.com/brixtonlocal.life/">@brixtonlocal.life</AboutLink> for lots more information and updates about the businesses featured here.</AboutText>
          <AboutText>For further information on our story so far please check out the articles in the <AboutLink href="http://www.brixtonbuzz.com/2020/04/brixton-local-website-lists-local-business-still-operating-delivering-and-providing-new-services-during-the-covid-19-lockdown/">Brixton Buzz</AboutLink> and <AboutLink href="https://brixtonblog.com/2020/04/brixton-local-so-good-they-named-it-twice/">Brixton Blog</AboutLink></AboutText>
          <AboutText>The information on this website was crowdsourced using a google spreadsheet.  For access to the spreadsheet to update an existing entry or add a new one, please request access <AboutLink href = "mailto: brixtonlocal@gmail.com">here</AboutLink>.</AboutText>
          <AboutText>To set up a similar project in your area please go to the <AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> website.</AboutText>
          <AboutText><AboutLink href="https://www.lovelocal.life/">LoveLocal.Life</AboutLink> supports local communities during the COVID-19 lockdown by helping them easily set up websites that spread the word about independent businesses and services in their area.  
          This includes businesses that are still operational, new delivery services and other activities, such as community groups and local support.</AboutText>
          <AboutText>To get in contact please  <AboutLink href = "mailto: brixtonlocal@gmail.com">email</AboutLink> us.</AboutText>
        </AboutContainer>
      </Box>
  )
}

export default About