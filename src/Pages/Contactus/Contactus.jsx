import React,{lazy,useState} from 'react'
const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
import './Contactus.css'
const Contactus = () => {

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        city: '',
        message: ''
      });
    
      const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to the server)
        console.log(formData);
      };
    
    
  return (
    <div>

        <Header/>
        <main>
            <div className="top_section-content">
              <div className="top_section_text">
              <h2>Hello!</h2>
              <p className='contact_top_tagline'>We’d love to hear from you</p>
              </div>
              

                <div className="top_section-contact-info">
                    <div className="top_section-contact-info_email">
                    <h6>Write us an email:</h6>
                    <p>info@nextdoorlivinn.com</p>

                    </div>
                    <div className="top_section-contact-info_phone">
                    <h6>Call us on:</h6>
                    <p>+91 000 000 0000</p>
                    </div>


                   
                </div>
            </div>

            <section>
                <div className="main_contact_content container">
               <h3>How can we help?</h3>

                <form onSubmit={handleSubmit} className='main_contact_form '>
      <div className='input_contact '>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder=' Full Name here'
        />
      </div>
      <div className='input_contact '>
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder='Your Contact  Number'
        />
      </div>
      <div className='input_contact '>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
      </div>
      <div className='input_contact '>
        <label htmlFor="city">City of Interest:</label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        >
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className='input_contact'>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Message'
        />
      </div>
      <div className="contact-btn">
      <button type="submit">Submit</button>

      </div>
    </form> 
                </div>
            </section>
        </main>
        <Footer/>
    </div>
  )
}

export default Contactus