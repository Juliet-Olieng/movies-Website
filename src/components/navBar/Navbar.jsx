import React, { useEffect, useState } from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import "./style.css";

const Navbar = ({onFilter}) => {
  const [query, setQuery]=useState("")

 
  const onSearch=(e)=>{
    setQuery(e.target.value)
      onFilter(e.target.value)
  }

 
  return (
    <div>
      <div className="Nav">
       <h4>M<span>oo</span>vie</h4> 
        <label htmlFor="search">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for movies..."
            value={query}
            onChange={onSearch}
          />
        </label>
        <ul>
            <li><a href="">Home</a></li>
        </ul>
        <h4>My list</h4>
        <button>Sign in</button>

      </div>
      
    </div>
  );
};

export default Navbar;
