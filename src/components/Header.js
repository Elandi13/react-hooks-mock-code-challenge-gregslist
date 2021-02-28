import React from "react";
import Search from "./Search";
///everything here is part of deliverable 4
///onSearch comes from the app prop being passed into the component of header
/// we then pass this prop again into the search and by doing this we can acess our handleSearch function inside of search
function Header({onSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch ={onSearch}/>
    </header>
  );
}

export default Header;
