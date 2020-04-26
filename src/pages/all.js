import React from "react"

import SEO from "../components/SEO"
import Box from '#components/atoms/Box';

import { NavBar, NamesMenu } from '#components/app';

import _ from 'lodash';

const extractItemData = ({
  node: {
    Name = '',
  } = [],
}) => ([
  Name
])

const All = ({data}) => {
  
  const allNameData = data.allGoogleSheetValue.edges;
  const names = allNameData.map(extractItemData);
  const namesArray = _.flatten(names).sort();
 
    return (
      <Box>
        <SEO title="Categories page" />
        <NavBar></NavBar>
        <Box px={[16, 40]}>
        <NamesMenu width="100%" items={namesArray} />
        </Box>
        {/* {allBusinessData.map(businessData => <PlaceItem businessName={businessData.node.Name}/>)} */}
      </Box>
    )
  }

  export const query = graphql`
  query AllNamesQuery {
    allGoogleSheetValue {
      edges {
        node {              
          Name
        }
      }
    }
  }
`
  
  export default All