import React from 'react';
import "./Search.css";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='search-container'>
      <form>
        <div className="input-container">
          <input type="text" placeholder='Search by Location'/>
          <div className="search-icon">
            <IoSearch/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search;
