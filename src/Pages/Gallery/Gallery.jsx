import React, { lazy } from 'react';
import './Gallery.css';

const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
import Ban from '/g-ban.png';
import Comfort1 from '/comfort/comfort1.png';
import Comfort2 from '/comfort/comfort2.png';
import Comfort3 from '/comfort/comfort3.png';
import Comfort4 from '/comfort/comfort4.png';
import Comfort5 from '/comfort/comfort5.png';
import Gym1 from '/comfort/gym1.png';
import Gym2 from '/comfort/gym2.png';
import Gym3 from '/comfort/gym3.png';
import Gym4 from '/comfort/gym4.png';
import Gym5 from '/comfort/gym5.png';
import LazyLoad from 'react-lazyload';



const Gallery = () => {
  const AreaZOne = [
    {
      areaTitle: "Your Comfort Area",
      areaDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      AreaImages: [
        { AreaImage: Comfort1 },
        { AreaImage: Comfort2 },
        { AreaImage: Comfort3 },
        { AreaImage: Comfort4 },
        { AreaImage: Comfort5 },
      ]
    },

    {
      areaTitle: "Your Dining Area",
      areaDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      AreaImages: [
        { AreaImage: Comfort1 },
        { AreaImage: Comfort2 },
        { AreaImage: Comfort3 },
        { AreaImage: Comfort4 },
        { AreaImage: Comfort5 },
      ]
    },{
      areaTitle: "Your Gaming Area",
      areaDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      AreaImages: [
        { AreaImage: Comfort1 },
        { AreaImage: Comfort2 },
        { AreaImage: Comfort3 },
        { AreaImage: Comfort4 },
        { AreaImage: Comfort5 },
      ]
    },{
      areaTitle: "Your Dining Area",
      areaDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      AreaImages: [
        { AreaImage: Comfort1 },
        { AreaImage: Comfort2 },
        { AreaImage: Comfort3 },
        { AreaImage: Comfort4 },
        { AreaImage: Comfort5 },
      ]
    },{
      areaTitle: "Gym & Lounge Area",
      areaDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      AreaImages: [
        { AreaImage: Gym1 },
        { AreaImage: Gym2 },
        { AreaImage: Gym3 },
        { AreaImage: Gym4 },
        { AreaImage: Gym5 },
      ]
    },
  ];

  return (
    <div>
      <Header />

      
      <section className="gallery_banner">
        <div className="banner_img">
          <img src={Ban} alt="Banner" />
        </div>
      </section>
      {AreaZOne.map((area, index) => (
        <div className="single_area" key={index}>
          <div className="top_area_text">
            <h3>{area.areaTitle}</h3>
            <p>{area.areaDes}</p>
            <div className="container">
              <div className="areas_image_array row_1">
                {area.AreaImages.slice(0, 2).map((areaimg, index) => (
                  <div className="single_area_img" key={index}>
                                    <LazyLoad height={247} offset={100}>

                    <img src={areaimg.AreaImage} alt={area.areaTitle} />
                    </LazyLoad>
                  </div>
                ))}
              </div>
              <div className="areas_image_array row_2">
                {area.AreaImages.slice(2).map((areaimg, index) => (
                  <div className="single_area_img" key={index}>
                                    <LazyLoad height={247} offset={100}>

                    <img src={areaimg.AreaImage} alt={area.areaTitle} />
                    </LazyLoad>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Gallery;
