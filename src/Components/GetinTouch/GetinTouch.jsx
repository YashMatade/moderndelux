import React from 'react';
import './GetinTouch.css';

const GetinTouch = () => {
  return (
    <div>
      <div className="get_query_form">
        <h3>Fill out the form below & We will help you to find a perfect home for you</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required placeholder='Full Name here'/>
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input type="tel" id="mobile" name="mobile" required placeholder='Your Contact Number' />
          </div>
          <div className="form-group">
            <label htmlFor="city">City of Interest:</label>
            <select id="city" name="city" required >
            <option value="" disabled selected>Select a city</option>
            <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" required placeholder='Location'/>
          </div>
          <div className="book_now_btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetinTouch;
