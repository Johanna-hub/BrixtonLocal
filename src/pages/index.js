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
const normaliseTag = tag => tag;

const extractItemData = ({
  node: {
    Name = '',
    Category_1 = '',
    Tags,
  } = {},
}) => ({
  name: Name,
  category: Category_1,
  source: 'https://media-cdn.tripadvisor.com/media/photo-s/15/7d/ca/8a/bakery.jpg',
  tags: normaliseTag(Tags) || ['Fruit & Veg', 'Bread'],
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
        }
      }
    }
  }
`

export default IndexPage
