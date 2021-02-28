import React, { useState } from "react";

///everything here is part of deliverable 4


///by passing this prop of onSearch we are essentially passing down our handleSearch function into here all the way from the app component.
function Search({onSearch}) {
  const [currentSearch, setCurrentSearch] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch);
    //// we then use this prop to say hey in the function of handleSearch look for the value in currentSearch when i hit that submit button. 
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currentSearch}
        ///so now we use currentSearch as our new value.
        onChange={(e) => setCurrentSearch(e.target.value)}
        /// first thing we need to do is first set this form as a controlled form so we can always acesss the value in some state variable.
        //so on top add our useState. 
        /// after adding state add setCurrentSearch to line 19 in order to set it as the new value you are looking for.
        /// after adding the states you go back to the app and create a function to handleSearch
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
