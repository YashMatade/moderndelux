import React, { lazy, useState, useEffect } from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
const Search = lazy(() => import("../../Components/Search/Search"));
const GetinTouch = lazy(() => import("../../Components/GetinTouch/GetinTouch"));
const VegNonVegDots = lazy(() =>
  import("../../Components/VegNonVegDots/VegNonVegDots.jsx")
);
import Lou from "/lou.png";
import Men from "/men.png";
import Women from "/women.png";
import Co from "/co.png";
import BImg from "/footer.png";

import MenImg from "../../assets/Men.png";
import WomenImg from "../../assets/woman.png";
import PropertyImage from "../../assets/homeimage.png";
import COImg from "../../assets/proffesionals.png";
import Q1 from "/home/q1.png";
import Q2 from "/home/q2.png";
import LA from "/home/la.png";
import Sn from "/home/sn.png";
import Coffee from "/home/coffee.png";
import MainBanner from "./MainBanner.jsx";
import payingtable from "../../assets/playingtable.png";
import cooking from "../../assets/cooking.png";
import food from "../../assets/food.png";
import fitness from "../../assets/fitness.png";
import lounge from "../../assets/Lounge.png";
import review from "../../assets/review.png";
import Slider from "react-slick";
import Ban from "/ban.png";
import Searchbar from "../../Components/Searchbar/Searchbar.jsx";
import {
  getAdditionalSectiondata,
  AdvertisementContent,
  getMoreAmmenities,
  LoungeContent,
  getmakeityourselfIcons,
  GamesContentIcon,
  GamesContent,
  getmakeityourself,
  FoodContent,
} from "../../Routes/Routes.js";
import LazyLoad from "react-lazyload";

const Home = () => {
  const [Advertisementdata, setAdvertisementData] = useState([]);
  const [Amentiesdata, setAmentiesData] = useState([]);
  const [Loungedata, setLoungeData] = useState([]);
  const [DoIcondata, setDoIconData] = useState([]);
  const [Dodata, setDoData] = useState([]);
  const [GamesIcondata, setGamesIconData] = useState([]);
  const [GamesContentdata, setGamesContentData] = useState([]);
  const [GamesContenttitle, setGamesContenttitle] = useState("");
  const [FoodContentdata, setFoodContentdata] = useState([]);
  const [AdditionalContentdata, setAdditionalContentdata] = useState([]);
  const [LoungueSliders, setLoungeSliders] = useState([]);
  const [fitnessSliders, setFitnessSliders] = useState([]);

  useEffect(() => {
    Promise.all([
      AdvertisementContent(),
      getMoreAmmenities(),
      LoungeContent(),
      getmakeityourselfIcons(),
      GamesContentIcon(),
      GamesContent(),
      getmakeityourself(),
      FoodContent(),
      getAdditionalSectiondata(),
    ])
      .then(
        ([
          advertisementRes,
          amenitiesRes,
          LoungeRes,
          DoIConRes,
          GamesIconRes,
          GamesContentRes,
          DoContentRes,
          FoodRes,
          AdditonalSectionRes,
        ]) => {
          setAdvertisementData(advertisementRes.data || []);
          setAmentiesData(amenitiesRes.data || []);
          setLoungeData(LoungeRes.data || []);
          setDoIconData(DoIConRes.data || []);
          setGamesIconData(GamesIconRes.data || []);
          setGamesContentData(GamesContentRes.data || []);
          setGamesContenttitle(GamesContentRes.data || []);
          setDoData(DoContentRes.data || []);
          setFoodContentdata(FoodRes.data || []);
          setAdditionalContentdata(AdditonalSectionRes.data || []);
          setLoungeSliders(
            AdditonalSectionRes.data
              ?.filter((content) => content.title === "Lounge Area")
              .map((res) => res.additional_image)
          );
          setFitnessSliders(
            AdditonalSectionRes.data
              ?.filter((content) => content.title === "Fitness Space")
              .map((res) => res.additional_image)
          );
        }
      )
      .catch((err) => {
        console.error("Error getting data", err);
      });
  }, []);

  const loungeData = AdditionalContentdata?.filter(
    (content) => content.title === "Lounge Area"
  );

  const fitnessData = AdditionalContentdata?.filter(
    (content) => content.title === "Fitness Space"
  );

  // console.log(loungeData?.map((res) => res.additional_image));

  const Filters = [
    {
      filterImg: Men,
      filtername: "Livin'Space for Men",
    },
    {
      filterImg: Women,
      filtername: "Livin'Space for Women",
    },
    {
      filterImg: Co,
      filtername: "Livin'Space for Professionals",
    },
  ];
  const imageUrls = [PropertyImage, PropertyImage, PropertyImage];

  const imageUrlsForSnookerTable = [
    payingtable,
    payingtable,
    payingtable,
    payingtable,
    payingtable,
    payingtable,
  ];
  const imageUrlsForCooking = [
    cooking,
    cooking,
    cooking,
    cooking,
    cooking,
    cooking,
  ];
  const imageUrlsForFood = [food, food, food, food, food, food];
  const imageUrlsForFitness = [
    fitness,
    fitness,
    fitness,
    fitness,
    fitness,
    fitness,
  ];
  const imageUrlsForlounge = [lounge, lounge, lounge, lounge, lounge, lounge];

  const reviewImages = [review, review, review, review, review, review, review];

  const amenities = [
    { name: "Studio Rooms With Spacious Beds & Mattresses" },
    { name: "Lift" },
    {
      name: "Complete Power Backup",
      details: "(Including Lift, Plug Points & Fans, Washing Machines)",
    },
    { name: "Study Table & Chair In Every Room" },
    { name: "Fridge & RO For Drinking Water In Every Floor" },
    { name: "Lounge Area In Every Floor" },
    { name: "Washing Machine" },
    { name: "Biometric Access For Security" },
    { name: "24/7 CCTV surveillance" },
  ];

  const Qualities = [
    {
      QualityImg: Q1,
      Qualitytext: "Deposit is lesser then your month’s rent",
    },
    {
      QualityImg: Q1,
      Qualitytext: "No hidden charges and no brokerage",
    },
    {
      QualityImg: Q2,
      Qualitytext: "Quick and Instant move -in",
    },
    {
      QualityImg: Q2,
      Qualitytext: "Ultra Luxury",
    },
  ];

  const Games = [
    {
      name: "Cricket",
      logo: Q1,
    },

    {
      name: "Badminton Court",
      logo: Q1,
    },
    {
      name: "Chess Board",
      logo: Q1,
    },
    {
      name: "Table Tennis",
      logo: Q1,
    },
    {
      name: "Carrom Board",
      logo: Q1,
    },
    {
      name: "Foosball",
      logo: Q1,
    },
  ];

  const Amenities = [
    {
      name: "Indoor Games",
      logo: Q1,
    },
    {
      name: "Theater Room",
      logo: Q2,
    },
    {
      name: "Lift",
      logo: Q2,
    },
    {
      name: "Smart TV",
      logo: Q2,
    },
    {
      name: "Smart TV",
      logo: Q2,
    },
    {
      name: "Smart TV",
      logo: Q2,
    },
    {
      name: "Smart TV",
      logo: Q2,
    },
    {
      name: "Smart TV",
      logo: Q2,
    },
    {
      name: "Smart TV",
      logo: Q2,
    },
    {
      name: "Smart TV",
      logo: Q2,
    },
    {
      name: "Smart TV",
      logo: Q2,
    },
    {
      name: "Smart TV",
      logo: Q2,
    },
  ];

  const cookingfeatures = [
    {
      name: "Coffee Vending Machine",
      logo: Coffee,
    },
    {
      name: "Induction Cooktop",
      logo: Q2,
    },
    {
      name: "Toaster",
      logo: Q2,
    },
    {
      name: "Snack Vending Machine",
      logo: Q2,
    },
    {
      name: "Microwave",
      logo: Q2,
    },
    {
      name: "Egg Boiler",
      logo: Q2,
    },
  ];

  const settingSnookerImages = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          speed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          speed: 1000,
        },
      },
    ],
  };
  const [sliderRefSnookerTable, setSliderRefSnookerTable] = useState(null);
  const goToNextSnooker = () => {
    sliderRefSnookerTable.slickNext();
  };

  const goToPreviousSnooker = () => {
    sliderRefSnookerTable.slickPrev();
  };

  const settingCookingImages = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
          speed: 1000,
        },
      },
    ],
  };

  const [sliderRefCooking, setSliderRefCooking] = useState(null);
  const goToNextCooking = () => {
    sliderRefCooking.slickNext();
  };

  const goToPreviousCooking = () => {
    sliderRefCooking.slickPrev();
  };

  const settingFoodImages = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
          speed: 1000,
        },
      },
    ],
  };

  const [sliderRefFood, setSliderRefFood] = useState(null);
  const goToNextFood = () => {
    sliderRefFood.slickNext();
  };

  const goToPreviousFood = () => {
    sliderRefFood.slickPrev();
  };

  const settingFitnessImages = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
          speed: 1000,
        },
      },
    ],
  };

  const [sliderRefFitness, setSliderRefFitness] = useState(null);
  const goToNextFitness = () => {
    sliderRefFitness.slickNext();
  };

  const goToPreviousFitness = () => {
    sliderRefFitness.slickPrev();
  };

  const settingloungeImages = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
          speed: 1000,
        },
      },
    ],
  };

  const [sliderRefLoungue, setSliderRefLoungue] = useState(null);
  const goToNextLoungue = () => {
    sliderRefLoungue.slickNext();
  };

  const goToPreviousLoungue = () => {
    sliderRefLoungue.slickPrev();
  };

  const settingReviewImages = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          autoSlide: true,
          speed: 1000,
        },
      },
    ],
  };

  const [sliderRefReview, setSliderRefReview] = useState(null);
  const goToNextReview = () => {
    sliderRefReview.slickNext();
  };

  const goToPreviousReview = () => {
    sliderRefReview.slickPrev();
  };

  return (
    <div>
      <Header className="header" />
      <div className="home_page">
        <main>
          <div className="main-banner-wrapper">
            <MainBanner />
          </div>
          <div className="home_search container">
            {/* <Search /> */}
            <Searchbar />
          </div>
          {/* Filters */}
          <div className="row ps-3 pe-3">
            {Filters.map((filter, index) => (
              <div
                key={index}
                className="col-4 d-flex justify-content-center mb-4"
              >
                <div className="position-relative text-center filter_home">
                  <LazyLoad height={100} offset={300}>
                    <img
                      src={filter.filterImg}
                      className="img-fluid mb-3"
                      alt={filter.filtername}
                      style={{
                        borderRadius: "20px",
                        objectFit: "cover",
                        objectPosition: "right",
                      }}
                    />
                  </LazyLoad>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "400",
                      color: "#000000",
                      position: "absolute",
                      bottom: "10px",
                      left: "4%",
                      transform: "translateY(-120px)",
                      borderRadius: "5px",
                      padding: "2px 5px",
                    }}
                    className="d_filter_name"
                  >
                    {filter.filtername}
                  </p>

                  <p className="m_filter_name">{filter.filtername}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="container-fluid">
            {Advertisementdata.map((ad, index) => (
              <section className="home_ad_banner" key={index}>
                <h3>{ad?.title}</h3>
                <p>{ad?.description}</p>
                <div className="banner_container">
                  <img
                    src={ad?.image_banner}
                    alt="Banner"
                    className="img-fluid"
                  />
                  <div className="ad_banner_content">
                    <h4>{ad?.banner_title}</h4>
                    <p className="text-white">{ad?.banner_description}</p>
                    <button>Explore</button>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Properties Slider  */}
          {/* <div>
            <div className="ms-4 me-4">
              <Slider {...settings}>
                {imageUrls.map((url, index) => (
                  <div key={index} className="slider-item">
                    <img src={url} alt={`Slide ${index + 1}`} />
                    <div className="slider-caption">
                      <h3>Koramangala</h3>
                      <p>4th Block</p>
                    </div>
                  </div>
                ))}
              </Slider>
              <a href="/properties" className="view-all">
                View all →
              </a>
            </div>
          </div> */}
          {/* <section className="main_qualities">
            {Qualities.map((Qualities, index) => (
              <div className="qualities_item" key={index}>
                <img src={Qualities.QualityImg} alt={Qualities.Qualitytext} />
                <p>{Qualities.Qualitytext}</p>
              </div>
            ))}
          </section> */}
          {/* Amenities */}
          {/* <section className="amenities_home">
            <h3>Amenities</h3>
            <div className="main_amenities">
              {Amenities.map((Amen, index) => (
                <div className="single_amenties" key={index}>
                  <img src={Amen.logo} alt={Amen.name} />
                  <p>{Amen.name}</p>
                </div>
              ))}
            </div>
          </section> */}
          {/* Lounge Area */}
          <section>
            {Loungedata.map((lou, index) => (
              <div className="lounge_area" key={index}>
                <div className="lounge_image">
                  <LazyLoad height={754} offset={300}>
                    <img src={lou?.longue_image} alt="" />
                  </LazyLoad>
                </div>

                <div className="lounge_content">
                  <h3>{lou?.title}</h3>
                  <hr />
                  <p>{lou?.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Indoor Games */}

          <section className="indoor_games mb-3">
            <h3>Indoor Games</h3>
            <div className="all_indoor_games">
              {GamesIcondata.map((Game, index) => (
                <div className="single_game" key={index}>
                  <LazyLoad height={64} offset={300}>
                    <div className="icon_image">
                      <img src={Game?.game_icon} alt={Game.name} />
                    </div>
                  </LazyLoad>
                  <p>{Game?.title}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Snooker table */}

          {GamesContentdata.map((game, index) => (
            <section className="snooker" key={index}>
              {/* <h3>Snooker Table</h3>
          <img src={Sn} alt="snooker" /> */}

              <div className="snooker_content container">
                {game &&
                  game.paragraph &&
                  game.paragraph.length > 0 &&
                  game.paragraph.map((p, pIndex) => <p key={pIndex}>{p}</p>)}
              </div>

              {/* Snooker Images Slider */}
              <div className="mb-3">
                <Slider
                  ref={setSliderRefSnookerTable}
                  {...settingSnookerImages}
                >
                  {game &&
                    game.game_image &&
                    game.game_image.length > 0 &&
                    game.game_image.map((url, imgIndex) => (
                      <div key={imgIndex} className="slider-item p-2">
                        <LazyLoad height={164} offset={300}>
                          <img src={url} alt={`Slide ${imgIndex + 1}`} />
                        </LazyLoad>
                      </div>
                    ))}
                </Slider>
              </div>

              <div className="slider-controls mt-3">
                <button onClick={goToPreviousSnooker} className="me-2">
                  <b>{"<"}</b>
                </button>
                <button onClick={goToNextSnooker} className="ms-3">
                  <b>{">"}</b>
                </button>
              </div>
            </section>
          ))}

          <section className="do_urself">
            <h3>Do It Yourself</h3>
            <div className="all_cooking">
              {DoIcondata.map((cookingfeature, index) => (
                <div className="single_cook" key={index}>
                  <div className="icon_image">
                    <img
                      src={cookingfeature?.self_icon}
                      alt={cookingfeature.name}
                    />
                  </div>

                  <p>{cookingfeature?.title}</p>
                </div>
              ))}
            </div>

            {Dodata.map((dodata, index) => (
              <section className="" key={index}>
                <div className="all_cooking-content">
                  {dodata &&
                    dodata.paragraph &&
                    dodata.paragraph.length > 0 &&
                    dodata.paragraph.map((p, pIndex) => (
                      <p key={pIndex}>{p}</p>
                    ))}
                </div>

                {/* Slider for Cooking related Images */}

                <div className="">
                  <Slider ref={setSliderRefCooking} {...settingCookingImages}>
                    {dodata &&
                      dodata.self_image &&
                      (Array.isArray(dodata.self_image) &&
                      dodata.self_image.length > 0 ? (
                        dodata.self_image.map((url, imgIndex) => (
                          <div key={imgIndex} className="slider-item p-2">
                            <LazyLoad height={164} offset={300}>
                              <img src={url} alt={`Slide ${imgIndex + 1}`} />
                            </LazyLoad>
                          </div>
                        ))
                      ) : (
                        <div className="slider-item p-2">
                          <LazyLoad height={164} offset={300}>
                            <img
                              src={dodata.self_image}
                              alt="Single Image"
                              style={{ width: "100%" }}
                            />
                          </LazyLoad>
                        </div>
                      ))}
                  </Slider>

                  <div className="slider-controls mt-3">
                    <button onClick={goToPreviousCooking} className="me-2">
                      <b>{"<"}</b>
                    </button>
                    <button onClick={goToNextCooking} className="ms-3">
                      <b>{">"}</b>
                    </button>
                  </div>
                </div>
              </section>
            ))}
          </section>

          {FoodContentdata.map((fooddata, index) => (
            <div className="" key={index}>
              <section className="foods">
                <h3>{fooddata?.title}</h3>
                <p>{fooddata?.description}</p>

                <VegNonVegDots />

                <div className="foods_content">
                  {fooddata &&
                    fooddata.paragraph &&
                    fooddata.paragraph.length > 0 &&
                    fooddata.paragraph.map((p, pIndex) => (
                      <p key={pIndex}>{p}</p>
                    ))}
                </div>
              </section>
              <div className="mb-3">
                <Slider ref={setSliderRefFood} {...settingFoodImages}>
                  {/* {imageUrlsForFood.map((url, index) => (
                <div key={index} className="slider-item p-2">
                  <img src={url} alt={`Slide ${index + 1}`} />
                </div>
              ))} */}

                  {fooddata &&
                    fooddata.food_image &&
                    (Array.isArray(fooddata.food_image) &&
                    fooddata.food_image.length > 0 ? (
                      fooddata.food_image.map((url, imgIndex) => (
                        <div key={imgIndex} className="slider-item p-2">
                          <LazyLoad height={164} offset={300}>
                            <img src={url} alt={`Slide ${imgIndex + 1}`} />
                          </LazyLoad>
                        </div>
                      ))
                    ) : (
                      <div className="slider-item p-2">
                        <img
                          src={fooddata.food_image}
                          alt="Single Image"
                          style={{ width: "100%" }}
                        />
                      </div>
                    ))}
                </Slider>
                <div className="slider-controls mt-3">
                  <button onClick={goToPreviousFood} className="me-2">
                    <b>{"<"}</b>
                  </button>
                  <button onClick={goToNextFood} className="ms-3">
                    <b>{">"}</b>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <section className="text-center">
            <h3 style={{ fontWeight: "700" }}>{loungeData[0]?.title}</h3>
            <div className="">
              <p style={{ fontSize: "14px" }} className="add_text">
                {loungeData[0]?.description}
              </p>
            </div>
            <div className="mb-3">
              <Slider ref={setSliderRefLoungue} {...settingloungeImages}>
                {loungeData[0]?.additional_image?.map((url, imgIndex) => (
                  <div key={imgIndex} className="slider-item p-2">
                    <LazyLoad height={164} offset={300}>
                      <img src={url} alt={`Slide ${imgIndex + 1}`} />
                    </LazyLoad>
                  </div>
                ))}
              </Slider>
              <div className="slider-controls mt-3">
                <button onClick={goToPreviousLoungue} className="me-2">
                  <b>{"<"}</b>
                </button>
                <button onClick={goToNextLoungue} className="ms-3">
                  <b>{">"}</b>
                </button>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h3 className="" style={{ fontWeight: "700" }}>
              {fitnessData[0]?.title}
            </h3>
            <div className="" style={{ fontSize: "14px" }}>
              <p className="add_text">{fitnessData[0]?.description}</p>
            </div>
            <div className="mb-3">
              <Slider ref={setSliderRefFitness} {...settingFitnessImages}>
                {fitnessData[0]?.additional_image?.map((url, imgIndex) => (
                  <div key={imgIndex} className="slider-item p-2">
                    <LazyLoad height={164} offset={300}>
                      <img src={url} alt={`Slide ${imgIndex + 1}`} />
                    </LazyLoad>
                  </div>
                ))}
              </Slider>
              <div className="slider-controls mt-3">
                <button onClick={goToPreviousFitness} className="me-2">
                  <b>{"<"}</b>
                </button>
                <button onClick={goToNextFitness} className="ms-3">
                  <b>{">"}</b>
                </button>
              </div>
            </div>
          </section>

          {/* {AdditionalContentdata.map((AdditionalContent, index) => (
            <section className="fitness_space" key={index}>
              <h3>{AdditionalContent?.title}</h3>
              <div className="fitness_content">
                <p>{AdditionalContent?.description}</p>
              </div>

              <div className="mb-3">
                <Slider ref={setSliderRefFitness} {...settingFitnessImages}>
                  {AdditionalContent &&
                    AdditionalContent.additional_image &&
                    (Array.isArray(AdditionalContent.additional_image) &&
                    AdditionalContent.additional_image.length > 0 ? (
                      AdditionalContent.additional_image.map(
                        (url, imgIndex) => (
                          <div key={imgIndex} className="slider-item p-2">
                            <img src={url} alt={`Slide ${imgIndex + 1}`} />
                          </div>
                        )
                      )
                    ) : (
                      <div className="slider-item p-2">
                        <img
                          src={AdditionalContent.food_image}
                          alt="Single Image"
                          style={{ width: "100%" }}
                        />
                      </div>
                    ))}
                </Slider>
                <div className="slider-controls mt-3">
                  <button onClick={goToPreviousFitness} className="me-2">
                    <b>{"<"}</b>
                  </button>
                  <button onClick={goToNextFitness} className="ms-3">
                    <b>{">"}</b>
                  </button>
                </div>
              </div>
            </section>
          ))} */}

          <div className="mb-3">
            <Slider ref={setSliderRefReview} {...settingReviewImages}>
              {reviewImages.map((url, index) => (
                <div key={index} className="slider-item p-2">
                  <LazyLoad offset={300} height={162}>
                    <img src={url} alt={`Slide ${index + 1}`} />
                  </LazyLoad>
                  <div style={{ backgroundColor: "#EAEAEA" }}>
                    <h4 className="pt-3 ps-3">Lorem Ipsum</h4>
                    <div className="p-4" style={{ textAlign: "justify" }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry.
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="slider-controls mt-3">
              <button onClick={goToPreviousReview} className="me-2">
                <b>{"<"}</b>
              </button>
              <button onClick={goToNextReview} className="ms-3">
                <b>{">"}</b>
              </button>
            </div>
          </div>

          <section className="more_ammenties container-fluid">
            <h3>More Ammenities</h3>

            {Amentiesdata.length === 0 ? (
              <p>No Amenities Found</p>
            ) : (
              Amentiesdata.map((amenity, index) => (
                <div key={index} className="amenity">
                  <h6>{amenity?.amenity_name}</h6>
                  <p>{amenity?.amenity_detail}</p>
                </div>
              ))
            )}
            {Amentiesdata.map((amenity, index) => (
              <div key={index} className="amenitiy">
                <h6>{amenity?.amenity_name}</h6>
                <p>{amenity?.amenity_detail}</p>
              </div>
            ))}
          </section>
          {/* <section className="query_form">
            <GetinTouch />
          </section> */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
