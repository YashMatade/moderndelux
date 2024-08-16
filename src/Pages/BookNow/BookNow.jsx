import React, { lazy, Suspense } from 'react';
import './BookNow.css';

const Header = lazy(() => import('../../Components/Header/Header'));
const Footer = lazy(() => import('../../Components/Footer/Footer'));

const BookNow = () => {
  return (
    <Suspense fallback={<></>}>
      <div>
        <Header />
        <div className="container">
          <div className="book_now_box">
          <div className="book-now_property">
            <form>
              <div className="form_book_input">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" placeholder='Enter your Name' />
              </div>
             <div className="form_book_input">
             <label htmlFor="email">Email:</label>
             <input type="email" name="email" id="email" placeholder='Enter your Email' />
             </div>
             <div className="form_book_input">
             <label htmlFor="mobile">Contact Number:</label>
             <input type="tel" name="mobile" id="mobile" placeholder='Enter your Contact Number' />
             </div>
            <div className="form_book_input">
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" placeholder='Message' rows="4" cols="50"></textarea>

            </div>
<div className="book_now_btn">
<button>Submit</button>

</div>
            </form>
          </div>
          </div>
          
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default BookNow;
