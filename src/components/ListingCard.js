import React, { useState } from "react";

function ListingCard({listing, onDeleteListing}) {
  ///part of deliverable 3  we added our Propr of onDeleteListing here because we need to be able to call on the function and pass the Id so when we call it in out listingContainer it will have the id in it for us to use. 
  const [isFavorited, setIsFavorited] = useState(false) ///true would make all the items favorited. 
  /// this false is saying the images won't be favorited when the page loads
  /// we need these useState values in order to make the Toggle Function for our favorited to work. 
  /// start of Deliverable 2 

  const{id, image, description, location} = listing 
  ///by setting listing to equal all 3 of these we are destructering and helps clean up our Jsx so we don't have to refer to it as listing.image etc... 
   ///part of deliverable 1

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => { 
        onDeleteListing(id)
      });
      return
    };
  return (
     ///part of deliverable 1 {image} {description} {location}
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        
        {isFavorited ? ( ///we want to be able to conditionally render the button based on the boolean value for each of the component and we want it to be dynamic so when we click the button it will render a specific button depending on the value (true/false)
        /// part of Deliverable 2 

          <button 
          /// part of Deliverable 2 
          
          onClick = {()=> setIsFavorited(false)}
          className="emoji-button favorite active">★
          
          </button>
        ) : (
          <button 
          onClick = {()=> setIsFavorited(true)}
          className="emoji-button favorite">☆
          </button>
        /// part of Deliverable 2 
        )}
        <strong>{description}</strong>
        <span>{location}</span>
        <button onClick = {handleDelete}className="emoji-button delete">🗑</button>
  
      </div>
    </li>
  );
}

////Deliverable 1 is finished here. 
///Deliverable 2 is also complete in here. 
    ///it starts with line 5
/// Deliverable 3 also starts here
export default ListingCard;
