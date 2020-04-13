import React from "react";
import { Link } from "gatsby";
import _ from "lodash"

const Card = ({ businessName }) => {

  return (
    <div>
      <Link to={`/${_.kebabCase(businessName)}`}>{businessName}</Link>
    </div>
  );
};

export default Card;
