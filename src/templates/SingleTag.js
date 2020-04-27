import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Box from '#components/atoms/Box';
import { PlaceList } from '#components/app';
import { CategoryTitle, NavBar } from "../../components/app"

const normaliseTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags;
  }
  if (typeof tags === 'string') {
    return tags.split(",");
  }

  return [];
}

const extractItemData = ({
  node: {
    Name = '',
    Category_1 = '',
    Tags,
    Collection,
    Delivery,
    Image_Url,
  } = {},
}) => ({
  name: Name,
  category: Category_1,
  source: Image_Url,
  tags: normaliseTags(Tags),
  collection: Collection,
  delivery: Delivery, 
})

const SingleTag = ({ data, pageContext }) => {
  const allBusinessData = data.allGoogleSheetValue.edges;

  const TagItems = allBusinessData.map(extractItemData);
  const TagTitle = pageContext.TagTitle.tag;

  return (
    <Box>
      <SEO title="Tag page" />
      <NavBar></NavBar>
      <CategoryTitle items={TagTitle}></CategoryTitle>
      <Box px={[16, 40]} style={{ "margin-top":"10.1vh" }}>
        <PlaceList width="100%" items={TagItems} />
      </Box>
      {/* {allBusinessData.map(businessData => <PlaceItem businessName={businessData.node.Name}/>)} */}
    </Box>
  )
}

  export const query = graphql`
  query TagQuery($TagRegex : String!) {
    allGoogleSheetValue (filter: { Tags : { regex : $TagRegex }}) {
      edges {
        node {          
          Name      
          Category_1
          Category_2__only_if_relevant_
          Tags
          Collection
          Delivery
          Image_Url
        }
      }
    }
  }
`
export default SingleTag