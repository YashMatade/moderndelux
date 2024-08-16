import React from 'react';
import './Searchbar.css';

const Searchbar = () => {
  return (

    <div className="container">
<div className="searchbar-container">
      <input
        type="text"
        placeholder="Enter location"
        className="searchbar-input"
      />
      <select className="searchbar-select">
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        <option value="type3">Type 3</option>
      </select>
      <button className="searchbar-button">Search</button>
    </div>
    </div>
    
  );
}

export default Searchbar;
