import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Card from "../components/Card"

const IndexPage = ({ data }) => {

  const allBusinessData = data.allGoogleSheetValue.edges

  return (
    <div>
      <SEO title="Home page" />
      {allBusinessData.map(businessData => <Card businessName={businessData.node.Name}/>)}
    </div>
  )
}

export const query = graphql`
  query NameQuery {
    allGoogleSheetValue {
      edges {
        node {          
          Name          
        }
      }
    }
  }
`

export default IndexPage
