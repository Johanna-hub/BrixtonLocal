import React from 'react';
import styled from 'styled-components';

import { isLast } from '../utils';

import { Box, Text } from '../atoms';
import CategoryImage from './CategoryImage';
import { Row } from '../molecules';
import Link from './Link';
import _ from "lodash";
import reactStringReplace from "react-string-replace";
import { Tag } from '#components/app';


const PlaceImage = ({ source, ...props }) => (
    <BusinessImage width="100%" source={source} {...props} />
);

const BusinessImage = styled(CategoryImage)`
  width: 25%;
  @media (max-width: 768px) {
    width: 75%;
    padding-top: 10.1vh;
   }
`

const CategoryName = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  color: rgba(103, 128, 159, 1);
`;

const CollectionMethod = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  text-align: center;
  color: rgba(103, 128, 159, 1);
`;

const PlaceName = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 21px;
  color: #000000;
`;

const TagText = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

const BusinessBox = styled(Box)`
  width:25%;
  margin-bottom: 4vh;
  @media (max-width: 768px) {
    width: 75%;
   }
`
const AddressText = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
`;

const BusinessText = styled(Text)`
  font-family: SF Pro Text;
  font-style: normal;
  font-size: 16px;
  margin-top: 8px;
  margin-top: 8px;
`;

const BusinessLink = styled.a`
  font-family: SF Pro Text;
  font-style: normal;
  font-size: 16px;
  margin-top: 16px;
  text-decoration: none;
  color: rgba(103, 128, 159, 1);
  font-weight: 600;
`

const amendLinks = (text) => {
    const regexWeb = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
    const regexEmail = /([^@\s]+@[^@\s]+\.[^@\s]+)/gm;
    const webReplace = reactStringReplace(text, regexWeb, (match, i) => {
        const pattern = /^((http|https):\/\/)/;

        if(!pattern.test(match)) {
            const linkMatch = "https://" + match;
            return  <a href={linkMatch}>{match}</a>
        }
       return  <a href={match}>{match}</a>
    })

     const replacedText = reactStringReplace(webReplace, regexEmail, (match, i) => (
         <a href={`mailto:${match}`}>{match}</a>
    ))
    return replacedText;
}

const PlaceInfo = ({ name, category, tags, collection, delivery, description, address, lockdown, ordering, ordering_hours, website, facebook, instagram, twitter }) => {

    const linkedDescription = amendLinks(description);
    const linkedLockdown = amendLinks(lockdown);
    const linkedOrdering = amendLinks(ordering);
    const linkedOrderingHours = amendLinks(ordering_hours);

    return (
        <BusinessBox>
            <Row width="100%" justifyContent="space-between" mt={2} mb={1}>
                <Link to={`/category/${_.kebabCase(category)}`} style={{ textDecoration: 'none', "margin-bottom": "8px" }}>
                    <CategoryName>
                        {(category || '').toUpperCase()}
                    </CategoryName>
                </Link>
                <CollectionMethod>
                    {(delivery === "TRUE" ? "Delivery" : '')}
                    {(collection === "TRUE" && delivery === "TRUE" ? " & Collection" : collection === "TRUE" ? "Collection" : '')}
                </CollectionMethod>
            </Row>
            <PlaceName mb={2}>
                {name}
            </PlaceName>
            <AddressText>
                {address}
            </AddressText>
            <BusinessText>{linkedDescription}</BusinessText>
            <BusinessText style={{ display: lockdown ? "block" : "none" }}>Lockdown services: {linkedLockdown}</BusinessText>
            <BusinessText style={{ display: ordering ? "block" : "none" }}>{linkedOrdering} {linkedOrderingHours}</BusinessText>
            <BusinessLink href={`${website}`}
                          style={{ display: website ? "block" : "none" }}>{`${website}`.split("//")[1]}</BusinessLink>
            <BusinessLink href={`${instagram}`} style={{ display: instagram ? "block" : "none" }}>Instagram:
                @{`${instagram}`.split(".com/")[1]}</BusinessLink>
            <BusinessLink href={`${twitter}`} style={{ display: twitter ? "block" : "none" }}>Twitter:
                @{`${twitter}`.split(".com/")[1]}</BusinessLink>
            <BusinessLink href={`${facebook}`} style={{ display: facebook ? "block" : "none" }}>Facebook:
                @{`${facebook}`.split(".com/")[1]}</BusinessLink>
            {tags && (
                <Row flexWrap="wrap" style={{ "margin-top": "16px" }}>
                    {(tags || []).map((tag, i) => {
                      if(tag.trim()) {
                        return(
                        <Link to={`/tag/${_.kebabCase(tag)}`} style={{ textDecoration: 'none', "margin-top": "8px" }}>
                          <Tag key={i} type={tag} mr={!isLast(i, tags.length) ? 2 : 0}/>
                        </Link>
                        )
                      }
                    })}
                </Row>
            )}
        </BusinessBox>
    )
};

const PlaceItemContainer = ({ children, ...props }) => (
    <Box {...props} style={{"align-items":"center"}}>
        {children}
    </Box>
);

const parseImageSource = (url) => {
    const isDriveUrl = url.includes('drive.google.com');
    if (isDriveUrl) {
        return `http://drive.google.com/uc?export=view&id=${url.split('=')[1]}`
    }
    return url;
};

const BusinessInfo = ({ items: { name, category, tags, collection, delivery, description, source: _source, address, lockdown, ordering, ordering_hours, website, facebook, instagram, twitter }, ...props }) => {
    const source = parseImageSource(_source);

    return (
        <PlaceItemContainer {...props}>
            <PlaceImage flex={1} source={source} />
            <PlaceInfo name={name} category={category} tags={tags} collection={collection} delivery={delivery} description={description} address={address} lockdown={lockdown} ordering={ordering} ordering_hours={ordering_hours} website={website} facebook={facebook} instagram={instagram} twitter={twitter} />
        </PlaceItemContainer>
    );
}

BusinessInfo.defaultProps = {
    place: {
        name: 'Ashby\'s Shop',
        category: 'groceries',
        source: 'https://media-cdn.tripadvisor.com/media/photo-s/15/7d/ca/8a/bakery.jpg',
        tags: ['Fruit & Veg', 'Bread'],
    },
};

export default BusinessInfo;