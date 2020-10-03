import React from "react";
import "./style.css";
import Suggestion from "./Suggestion";

const SuggestionBox = ({ items, searchValue }) => {
  return (
    <div className="suggestions-holder">
      {items.map((item, key) => (
        <Suggestion
          id={item.id}
          name={item.name}
          address={item.address}
          pincode={item.pincode}
          searchValue={searchValue}
        />
      ))}
    </div>
  );
};

export default SuggestionBox;
