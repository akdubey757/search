import React from "react";
import "./style.css";

const SearchBox = ({ onChange }) => {
  return (
    <div>
      <input type="text" onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default SearchBox;
