import React, { useState,lazy,useEffect } from 'react';
import './Properties.css';
import PropertyImg 
from '/prop.jpg'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Bath from '/amenties/bath.svg'
import Wifi from '/amenties/wifi.svg'

const Header = lazy(() => import('../../Components/Header/Header'));
const Footer = lazy(() => import('../../Components/Footer/Footer'));
const Search = lazy(() => import('../../Components/Search/Search'));



import unisexlogo from '/unisex.svg'
import PropertyCard from './PropertyCard/PropertyCard';
import { GetAllPG, GetAllPGFAQ } from '../../Routes/Routes';

const Properties = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState(null);
const [PGs,setPGs]=useState([])
const [PGFAQ,setPGFAQ]=useState([])


useEffect(() => {
  Promise.all([GetAllPG(),GetAllPGFAQ()])
    .then(([pgDataRes,PgFAQRes]) => {
     setPGs(pgDataRes.data || [])
     setPGFAQ(PgFAQRes.data || [])
    })
    .catch(err => {
      console.error("Error getting data", err);
    })
    

}, []);


  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

const [openId, setOpenId] = useState(null); 


  const toggleAnswer = (id) => {
    setOpenId(id === openId ? null : id);
  };

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

const Properties = [
    {
      PropertyImg: PropertyImg, 
      PropertyName: "The Next Door Prime",
      address: "Koramangala 6th Block",
      sex: {
        name: "Unisex",
        logo: unisexlogo, 
      },
      Size: [
        { sizeName: "Single |" },
        { sizeName: "Double |" },
        { sizeName: "Triple" }
      ],
      amenities: [
        { logo: Bath, name: "Attached Bathroom" },
        { logo: Wifi, name: "Separate WiFi" },
        { logo: Bath, name: "Steady Table" }, 
        { logo: Bath, name: "Chair" }, 
        { logo: Bath, name: "Table Lamp" }, 
      ]
    },
    {
      PropertyImg: PropertyImg, 
      PropertyName: "The Next Door Prime",
      address: "Koramangala 6th Block",
      sex: {
        name: "Unisex",
        logo: unisexlogo, 
      },
      Size: [
        { sizeName: "Single |" },
        { sizeName: "Double |" },
        { sizeName: "Triple" }
      ],
      amenities: [
        { logo: Bath, name: "Attached Bathroom" },
        { logo: Wifi, name: "Separate WiFi" },
        { logo: Bath, name: "Steady Table" }, 
        { logo: Bath, name: "Chair" }, 
        { logo: Bath, name: "Table Lamp" }, 
      ]
    },
    {
      PropertyImg: PropertyImg, 
      PropertyName: "The Next Door Prime",
      address: "Koramangala 6th Block",
      sex: {
        name: "Unisex",
        logo: unisexlogo, 
      },
      Size: [
        { sizeName: "Single |" },
        { sizeName: "Double |" },
        { sizeName: "Triple" }
      ],
      amenities: [
        { logo: Bath, name: "Attached Bathroom" },
        { logo: Wifi, name: "Separate WiFi" },
        { logo: Bath, name: "Steady Table" }, 
        { logo: Bath, name: "Chair" }, 
        { logo: Bath, name: "Table Lamp" }, 
      ]
    },
    {
      PropertyImg: PropertyImg, 
      PropertyName: "The Next Door Prime",
      address: "Koramangala 6th Block",
      sex: {
        name: "Unisex",
        logo: unisexlogo, 
      },
      Size: [
        { sizeName: "Single |" },
        { sizeName: "Double |" },
        { sizeName: "Triple" }
      ],
      amenities: [
        { logo: Bath, name: "Attached Bathroom" },
        { logo: Wifi, name: "Separate WiFi" },
        { logo: Bath, name: "Steady Table" }, 
        { logo: Bath, name: "Chair" }, 
        { logo: Bath, name: "Table Lamp" }, 
      ]
    },
    {
      PropertyImg: PropertyImg, 
      PropertyName: "The Next Door Prime",
      address: "Koramangala 6th Block",
      sex: {
        name: "Unisex",
        logo: unisexlogo, 
      },
      Size: [
        { sizeName: "Single |" },
        { sizeName: "Double |" },
        { sizeName: "Triple" }
      ],
      amenities: [
        { logo: Bath, name: "Attached Bathroom" },
        { logo: Wifi, name: "Separate WiFi" },
        { logo: Bath, name: "Steady Table" }, 
        { logo: Bath, name: "Chair" }, 
        { logo: Bath, name: "Table Lamp" }, 
      ]
    },
    {
      PropertyImg: PropertyImg, 
      PropertyName: "The Next Door Prime",
      address: "Koramangala 6th Block",
      sex: {
        name: "Unisex",
        logo: unisexlogo, 
      },
      Size: [
        { sizeName: "Single |" },
        { sizeName: "Double |" },
        { sizeName: "Triple" }
      ],
      amenities: [
        { logo: Bath, name: "Attached Bathroom" },
        { logo: Wifi, name: "Separate WiFi" },
        { logo: Bath, name: "Steady Table" }, 
        { logo: Bath, name: "Chair" }, 
        { logo: Bath, name: "Table Lamp" }, 
      ]
    },
    {
      PropertyImg: PropertyImg, 
      PropertyName: "The Next Door Prime",
      address: "Koramangala 6th Block",
      sex: {
        name: "Unisex",
        logo: unisexlogo, 
      },
      Size: [
        { sizeName: "Single |" },
        { sizeName: "Double |" },
        { sizeName: "Triple" }
      ],
      amenities: [
        { logo: Bath, name: "Attached Bathroom" },
        { logo: Wifi, name: "Separate WiFi" },
        { logo: Bath, name: "Steady Table" }, 
        { logo: Bath, name: "Chair" }, 
        { logo: Bath, name: "Table Lamp" }, 
      ]
    }, {
      PropertyImg: PropertyImg, 
      PropertyName: "The Next Door Prime",
      address: "Koramangala 6th Block",
      sex: {
        name: "Unisex",
        logo: unisexlogo, 
      },
      Size: [
        { sizeName: "Single |" },
        { sizeName: "Double |" },
        { sizeName: "Triple" }
      ],
      amenities: [
        { logo: Bath, name: "Attached Bathroom" },
        { logo: Wifi, name: "Separate WiFi" },
        { logo: Bath, name: "Steady Table" }, 
        { logo: Bath, name: "Chair" }, 
        { logo: Bath, name: "Table Lamp" }, 
      ]
    }, {
      PropertyImg: PropertyImg, 
      PropertyName: "The Next Door Prime",
      address: "Koramangala 6th Block",
      sex: {
        name: "Unisex",
        logo: unisexlogo, 
      },
      Size: [
        { sizeName: "Single |" },
        { sizeName: "Double |" },
        { sizeName: "Triple" }
      ],
      amenities: [
        { logo: Bath, name: "Attached Bathroom" },
        { logo: Wifi, name: "Separate WiFi" },
        { logo: Bath, name: "Steady Table" }, 
        { logo: Bath, name: "Chair" }, 
        { logo: Bath, name: "Table Lamp" }, 
      ]
    },
    
  ];

  



  
  

  return (
    <>
    <Header/>
    <div className="container">


<div className="top_utilities">
<div className="top_searchbar">
<Search/>
    </div>

    <div className="filter_by">
      <button
        className={activeButton === 'men' ? 'active' : ''}
        onClick={() => handleButtonClick('men')}
      >
        Livin’ Space for Men
      </button>
      <button
        className={activeButton === 'women' ? 'active' : ''}
        onClick={() => handleButtonClick('women')}
      >
        Women
      </button>
      <button
        className={activeButton === 'coliving' ? 'active' : ''}
        onClick={() => handleButtonClick('coliving')}
      >
        Co-Living
      </button>
    </div>

</div>
    

   
      <div className="all_properites">
        <PropertyCard Properties={PGs} isLoading={isLoading}/>
      </div>
      {/* {PGFAQ.map((Pgfaq,index)=>(
        <div className="faq" key={index}>
        <h3 className="faq-title">{Pgfaq?.faq_title}</h3>
        {Pgfaq.faq_content.map((faq,index) => (
          <div className="question" key={index}>
            <div className="question-text">
              <p>{faq.faq_question}  </p>
              <span className={`toggle-btn ${openId === faq.id ? 'open' : ''}`} onClick={() => toggleAnswer(faq.id)} aria-label={openId === faq.id ? 'Collapse' : 'Expand'}>
                {openId === faq.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            {openId === faq.id && (
              <div className="answer">
                <p>{faq.faq_answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      ))}
       */}


{PGFAQ.map((Pgfaq, pgIndex) => (
  <div className="faq" key={pgIndex}> 
    <h3 className="faq-title">{Pgfaq?.faq_title}</h3>
    {Pgfaq?.faq_content.map((faq, faqIndex) => (
      <div className="question" key={`${pgIndex}-${faqIndex}`}> 
        <div className="question-text">
          <p>{faq?.faq_question}</p>
          <span
            className={`toggle-btn ${openId === faqIndex ? 'open' : ''}`}
            onClick={() => toggleAnswer(faqIndex)}
            aria-label={openId === faqIndex ? 'Collapse' : 'Expand'}
          >
            {openId === faqIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        {openId === faqIndex && (
          <div className="answer">
            <p>{faq?.faq_answer}</p>
          </div>
        )}
      </div>
    ))}
  </div>
))}

    </div>
    <Footer/>
    </>
   
  );
}

export default Properties;
