import React, { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import SuggestionBox from "./components/SuggestionsBox/SuggestionBox";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
  const [matchedItems, setMatchedItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const SearchBoxOnChange = async (searchValue) => {
    const value = searchValue;
    const matched = [];

    if (!fetchedData) {
      // if we havent fetched any data yet we get it and store in in the state
      // to avoid getting new data every time user searched
      const response = await axios.get(
        "http://www.mocky.io/v2/5ba8efb23100007200c2750c"
      );
      setItems(response.data);
      // set fetchData to true so that when user types text again we do not make
      // another api call
      setFetchedData(true);
    }

    if (value.length > 1) {
      items.forEach((element) => {
        if (
          element.id.indexOf(value) !== -1 ||
          element.name.indexOf(value) !== -1 ||
          element.address.indexOf(value) !== -1 ||
          element.pincode.indexOf(value) !== -1
        ) {
          // if any of those properties contains the searched value push the element into the matched array
          matched.push(element);
        }
      });
    }

    setSearchValue(value);
    setMatchedItems(matched);
  };

  return (
    <div className="App">
      <SearchBox onChange={SearchBoxOnChange} />
      <SuggestionBox items={matchedItems} searchValue={searchValue} />
    </div>
  );
}

export default App;
