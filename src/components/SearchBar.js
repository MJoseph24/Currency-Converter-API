/*This is where I all of the logic and elements of the search bar feature in this app is contained*/

import React, { useState } from "react";
import "./Searchbar.css"; // import the CSS file

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const API_KEY = "YOUR_API_KEY";
    const searchUrl = `https://cse.google.com/cse.js?cx=e491ec1e2457f4185`;
    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // use the data to display the search results
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Search Google for more currency-related information!"
        value={searchInput}
        onChange={handleChange}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
