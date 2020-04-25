import React from "react"

import SEO from "../components/SEO"
import Box from '#components/atoms/Box';

import { NavBar, CategoryMenu } from '#components/app';

const extractItemData = ({
  node: {
    Category_1 = '',
  } = [],
}) => ([
  Category_1,
])

const Categories = ({data}) => {
  
  const allCategoryData = data.allGoogleSheetValue.edges;
  const categories = allCategoryData.map(extractItemData);
  const flatArray = categories.flat().filter(category => category !== "")
  const categoryMenuArray = flatArray.filter((x, i, a) => a.indexOf(x) === i)

    return (
      <Box>
        <SEO title="Categories page" />
        <NavBar></NavBar>
        <Box px={[16, 40]}>
        <CategoryMenu width="100%" items={categoryMenuArray} />
        </Box>
        {/* {allBusinessData.map(businessData => <PlaceItem businessName={businessData.node.Name}/>)} */}
      </Box>
    )
  }

  export const query = graphql`
  query AllCategoryQuery {
    allGoogleSheetValue {
      edges {
        node {              
          Category_1
        }
      }
    }
  }
`
  
  export default Categories