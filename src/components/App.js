import React, {useEffect, useState}from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

///deliverable 4  search bar 
function App() {
  const [search, setSearch] = useState("")
  /// we set the useState as an empty string because we want to be able to search for whatever input we have in the search bar, if we put in say heater, then we would be looking for the items that only have the word heater in them. 
  
  function handlSearch(newSearch) {
    setSearch(newSearch)
    /// this function is what lets you type in a word into the searchBard and when you hit enter the item will appear with that word
    /// it does this by passing the prop onSearch onto the header in line 18
  }
  
  return (
    <div className="app">
      <Header onSearch={handlSearch} />
      <ListingsContainer search ={search}/>
    </div>
  );
}
/// we then have to pass a prop to use in our listingContainer so we do this by attaching our search ={search}

/// only do line below once you finished adding states inside of search component. 

////we add onSearch to header and set it to the function of handleSearch then we need to pass this prop into our header component. 

export default App;
