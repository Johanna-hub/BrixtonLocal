import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Card from "../components/Card"
import Box from '#components/atoms/Box';
import { PlaceList, CategoryList } from '#components/app';

// TODO: Fix categories and move to constants file
const categories = [{
  name: 'Community',
  count: 30,
}, {
  name: 'Fitness',
  count: 25
}, {
  name: 'Groceries',
  count: 20,
}, {
  name: 'Services',
  count: 15,
}]

// e.g. normalise `fruit-veg` -> `Fruit & Veg` with react-i18next or other i18n lib

// returns ['tag-name', 'tag-name-1', 'bread', ...]
const normaliseTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags;
  }
  if (typeof tags === 'string') {
    return Tags.split(",");
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

const IndexPage = ({ data }) => {
  const allBusinessData = data.allGoogleSheetValue.edges;


  const places = allBusinessData.map(extractItemData);
  return (
    <Box>
      <SEO title="Home page" />
      <CategoryList title="Browse Brixton by Category" items={categories} />
      <Box px={[16, 40]}>
        <PlaceList width="100%" items={places} />
      </Box>
      {/* {allBusinessData.map(businessData => <PlaceItem businessName={businessData.node.Name}/>)} */}
    </Box>
  )
}

export const query = graphql`
  query NameQuery {
    allGoogleSheetValue {
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

export default IndexPage
