import React, { useEffect, useState } from "react";
import "./MainBanner.css";
import { MainHomeBanner } from "../../Routes/Routes";
import LazyLoad from "react-lazyload";

const MainBanner = () => {
  const [data,setData]=useState([])

  useEffect(() => {
    MainHomeBanner()
      .then(res => {
        setData(res.data|| []);
      })
      .catch(e => {
        console.log(e, "Error Getting Data");
      });
  }, []);
  

  return (
    <div className="main-banner-container">
      {data?.map((d,index)=>(
        <div className="home_banner" key={index}>
          <LazyLoad offset={200} height={925}>
          <img src={d?.banner_image} alt={d?.title} />

          </LazyLoad>
      <div className="text-content">
        <h3 className="" style={{color:"black"}}>
        {d?.title}

          {/* <span className="text-dark" style={{ fontWeight: "400" }}>
          </span>{" "} */}
          <br />
          {/* <span
            className=""
            style={{ fontSize: "60px", fontWeight: "700", color: "black" }}
          >
            PG?
          </span> */}
        </h3>
        <h2
          className="text-danger"
          style={{ fontSize: "20px", fontWeight: "700" }}
        >
         {d?.tag_line}
        </h2>
        <p
          className="text-dark"
          style={{ fontSize: "12px", fontWeight: "500" }}
        >
          {d?.description}
        </p>
        <button>Explore Now</button>
      </div>
        </div>
      ))}
     
    </div>
  );
};

export default MainBanner;
