import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

///this is where we pass our search propr
///part of deliverable 4
function ListingsContainer({ search }) {
   ///part of deliverable 1
  const [listings, setListings] = useState([])  //empty array to represent all the listings in our application 
  ///step 1 would be to set up our fetch for our Api data 
useEffect(()=>{
  fetch(`http://localhost:6001/listings`) ///always double check the localhost link and make sure you copied the /listings part otherwise you'll get a promise error.
  .then((response) => response.json()) // this stays the same just like vanilla javascript 
  .then((listings) => setListings(listings))/// this is always an object and will return the info from the database. you need to always set it to the updated value(setListing) and pass the obj inside in this case listings.
  ///part of deliverable 1
  ///remember that inside the .then it needs a double (()) because of the way react functions
  /// another thing to keep in mind is that depending on the rest of the deliverables we may need to move this fetch request into our app instead of our container. 
}, [])


/// deliverable 3
function handleDeleteListing(id){
  const updatedListingsArray = listings.filter((listing)=> listing.id !== id)
  /// we get the
  /// we need a new array that doesnt have these listings so to do this we need to filter. 
  /// with each listing we are checking for the id  and if that id doesnt match the id we are passing into this function it will be included in the function. So we are excluding the ids that match. 
  setListings(updatedListingsArray)
  ///this calls on our updated value(setListings) while its passing in the function of updatedListingsArray that triggers the re-render with the new array of listings. 
  ///Once this is done we can see that the delete function works properly and renders without having the page to reload.
  /// part of deliverable 3 
}

///deliverable 4 
/// we now have to create a way for the list to filter depending on the search function so to do this we are searching through the same listings array and filtering out only the ones with the word that matches the input inside of our useState. So if we go back to app and see the useState you can set it to "heater" and the page should only show the items with the word heater in it. 
const filteredListings = listings.filter(listing => {
  return listing.description.toLowerCase().includes(search.toLowerCase())
})

// console.log(filteredListings)
/// after we do this we can then change line 44 from listings.map to filteredListings.map because we can now use this filtered list and render only the items that match the search. 



                      ///this was listings.map 
const listingCards = filteredListings.map((listingObj) => {  ///remember in here we are calling it listingObj because we are mapping through the obj and returing the data from inside that data into seperate arrays that we can then call on in our return. 
  // console.log(listingObj)
  return <ListingCard 
  key={listingObj.id}   ///part of deliverable 1
  listing={listingObj}  ///part of deliverable 1
  onDeleteListing={handleDeleteListing} /// added this so we can pass on the prop into ListingCard, we need a reference to this function in our handleDeleteListingPART OF DELVERABLE 3 
  /> 

  /// The reason we added listing={listingObj} is because we need to pass down a prop for out listingCard to read so by passing down the listingObj we are telling it hey our listing prop will have everything inside the listingObj
  ///ALWAYS USE RETURN BEFORE CALLING COMPONENET, also here is where we will pull out all the information needed from the database. 
})

  return (
    <main>
      <ul className="cards">
        {listingCards}  
        
      </ul>
    </main>
  );
  /// once we have {listingsCards} in here we need to know go into the component and begin to pull the info out from there to display properly on our page.
  ///part of deliverable 1
}

export default ListingsContainer;



/// Deliverable 1 starts here and goes into ListingCard component. 
