import React from "react";
import HighLightText from "../HighLightText";

const Suggestion = ({ id, name, address, pincode, searchValue }) => {
  return (
    <div className="suggestion">
      <b className="suggestion-id">
        <HighLightText text={id} highlight={searchValue} />
      </b>
      <span className="suggestion-name">
        <HighLightText text={name} highlight={searchValue} />
      </span>
      <span>
        <HighLightText text={pincode} highlight={searchValue} />,
        <HighLightText text={address} highlight={searchValue} />
      </span>
    </div>
  );
};

export default Suggestion;
