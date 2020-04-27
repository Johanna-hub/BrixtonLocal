import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Box from '#components/atoms/Box';
import { PlaceList, CategoryList, NavBar, Header } from '#components/app';

// TODO: Fix categories and move to constants file

// e.g. normalise `fruit-veg` -> `Fruit & Veg` with react-i18next or other i18n lib

// returns ['tag-name', 'tag-name-1', 'bread', ...]
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

const IndexPage = ({ data }) => {

  const categories = {};

  const allBusinessData = data.allGoogleSheetValue.edges;
  const places = allBusinessData.map(extractItemData);
  places.forEach(place => {
    if(place.category) {
      const category = (categories[place.category] ||
      {name: place.category, count: 0, source: place.source});
      categories[place.category] = category;
      category.count++;
    }
  });

  return (
    <Box>
      <SEO title="Brixton Local.Life" />
      <NavBar></NavBar>
      <Header></Header>
      <CategoryList items={Object.values(categories)} />
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
