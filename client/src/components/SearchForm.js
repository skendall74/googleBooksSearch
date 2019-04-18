import React from "react";

function SearchForm(props) {
  return (
    <div id="searchContainer">
      <h3>Book Search</h3>
      <form id="bookSearch">
        <label htmlFor="bookInput" form="bookSearch">
          Search for a Book:
        </label>
        <br />
        <input
          type="text"
          name="bookInput"
          id="bookInput"
          form="bookSearch"
          onChange={e => props.handleChange(e)}
          placeholder="Book Title"
          required
        />
        <br />
        <button type="submit" onClick={e => props.handleSearchClick(e)}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
