import React from "react";
import { graphql } from "gatsby";
import Box from '#components/atoms/Box';
import { BusinessInfo } from '#components/app';
import { NavBar } from "../../components/app";

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

  const normaliseTags = (tags) => {
    if (Array.isArray(tags)) {
      return tags;
    }
    if (typeof tags === 'string') {
      return tags.split(",");
    }
    return [];
  }

const capitaliseTags = (tags) => {
    return tags.map(tag => {
      const newTag = tag.replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
      );

      return newTag.replace(
        /\+\S*/g,
        txt => "+" + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase(),
      );

    });
  };

  const socialMediaUrl = (link, network) => {
    if (link.includes(`${network}`)){
      return link
    } else if (link.includes("@")) {
      const Handle = link.split("@")[1]
      return `https://www.${network}.com/${Handle}`
    } else if (link) {
      return `https://www.${network}.com/${link}`
    }
  } 

  const websiteUrl = (site) => {
    if (site.includes("http")) {
      return site
    } else if (site) {
      return `https://${site}`
    }
  }
    
  const BusinessListing = {
    name: Name,
    address: Address,
    category: Category_1,
    collection: Collection,
    delivery: Delivery,
    description: Short_description,
    lockdown: Lockdown_services,
    ordering: How_to_order,
    facebook: socialMediaUrl(Facebook, "facebook"),
    source: Image_Url,
    instagram: socialMediaUrl(Instagram, "instagram"),
    twitter: socialMediaUrl(Twitter, "twitter"),
    tags: capitaliseTags(normaliseTags(Tags)),
    ordering_hours: Ordering_timescales_opening_hours,
    website: websiteUrl(Website)
  }
  
  return (
    <Box>
      <NavBar></NavBar>
      <BusinessInfo items={BusinessListing}/>
  </Box>
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
