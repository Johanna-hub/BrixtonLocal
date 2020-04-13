import React from "react";
import { graphql } from "gatsby";

const SingleBusiness = ({ data }) => {

  const {
    Address,
    Category_1,
    Category_2__only_if_relevant_,
    Collection,
    Delivery,
    Facebook,
    How_to_order,
    Image_Url,
    Instagram,
    Lockdown_services,
    Name,
    Ordering_timescales_opening_hours,
    Short_description,
    Tags,
    Twitter,
    Website
  } = data.googleSheetValue;

  return (
    <div>
      <ul>
        <li>Name: {Name}</li>
        <li>Address: {Address}</li>
        <li>Category_1: {Category_1}</li>
        <li>Category_2__only_if_relevant_: {Category_2__only_if_relevant_}</li>
        <li>Collection: {Collection}</li>
        <li>Delivery: {Delivery}</li>
        <li>Facebook: {Facebook}</li>
        <li>Image_Url: {Image_Url}</li>
        <li>How_to_order: {How_to_order}</li>
        <li>Instagram: {Instagram}</li>
        <li>Lockdown_services: {Lockdown_services}</li>
        <li>Ordering_timescales_opening_hours: {Ordering_timescales_opening_hours}</li>
        <li>Short_description: {Short_description}</li>
        <li>Tags: {Tags}</li>
        <li>Twitter: {Twitter}</li>
        <li>Website: {Website}</li>
      </ul>
    </div>
  );
};

export const query = graphql`
  query BusinessQuery($Name: String!) {
    googleSheetValue(Name: { eq: $Name }) {
        Name      
        Address
        Category_1
        Category_2__only_if_relevant_
        Collection
        Delivery
        Facebook
        How_to_order
        Image_Url
        Instagram
        Lockdown_services
        Name
        Ordering_timescales_opening_hours
        Short_description
        Tags
        Twitter
        Website      
    }
  }
`

export default SingleBusiness;
