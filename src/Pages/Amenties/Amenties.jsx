import React, { lazy, useState } from "react";
import "./Amenties.css";
const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
const VegNonVegDots = lazy(() =>
  import("../../Components/VegNonVegDots/VegNonVegDots.jsx")
);
import Ban from "/a-ban.png";

import payingtable from "../../assets/playingtable.png";
import cooking from "../../assets/cooking.png";
import food from "../../assets/food.png";
import fitness from "../../assets/fitness.png";
import lounge from "../../assets/Lounge.png";
import Slider from "react-slick";
import PropertyImage from "../../assets/homeimage.png";
import review from "../../assets/review.png";
import Q1 from "/home/q1.png";
import Q2 from "/home/q2.png";
import Coffee from "/home/coffee.png";

import "../Home/Home";

const Amenties = () => {
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
    <div className="amenties_main">
      <Header />

      <section className="amenties_banner">
        <div className="amenties_banner_container">
          <img
            src={Ban}
            alt="Banner"
            className="amenties_banner_image img-fluid"
          />
          <div className="ad_banner_content">
            <h4>Win Win!</h4>
            <p className="text-white">
              Yes, we have got you a bit fun time too!
            </p>
            <button>Explore</button>
          </div>
        </div>
      </section>

      {/* Indoor Games */}
      <section className="indoor_games mb-3">
        <h3>Indoor Games</h3>
        <div className="all_indoor_game">
          {Games.map((Game, index) => (
            <div className="single_game" key={index}>
              <img src={Game.logo} alt={Game.name} />
              <p>{Game.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Indoor Games Content and Image Slider */}

      <section className="snooker">
        {/* <h3>Snooker Table</h3>
            <img src={Sn} alt="snooker" /> */}
        <div className="snooker_content container">
          <p>
            We provide residents with a variety of indoor games to help you
            unwind and relax after a long day. The indoor games available are
            designed to cater to the interests of residents of all ages and
            backgrounds.
          </p>
          <p>
            The indoor games also provide residents with an opportunity to
            socialize and bond with other residents, improving their overall
            experience at The Next Door.
          </p>
        </div>

        {/* Snooker Images Slider */}
        <div className="mb-3">
          <Slider ref={setSliderRefSnookerTable} {...settingSnookerImages}>
            {imageUrlsForSnookerTable.map((url, index) => (
              <div key={index} className="slider-item p-2">
                <img src={url} alt={`Slide ${index + 1}`} />
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

      {/* Food  */}

      <section className="foods">
        <h3>We Provide 3 Times Food</h3>
        <p>North Indian & South Indian Food</p>
        <VegNonVegDots />
        <div className="foods_content">
          <p>
            We offer residents a range of high-quality cooking options. The
            cooking is prepared by skilled chefs who use fresh, locally sourced
            ingredients to create delicious and healthy meals.
          </p>
          <p>
            The dining area at The Next Door is clean, comfortable, and
            well-lit, creating a welcoming atmosphere for residents to enjoy
            their meals. The staff is friendly and attentive, ensuring that
            residents have a pleasant dining experience.
          </p>
        </div>
      </section>
      <div className="mb-3">
        <Slider ref={setSliderRefFood} {...settingFoodImages}>
          {imageUrlsForFood.map((url, index) => (
            <div key={index} className="slider-item p-2">
              <img src={url} alt={`Slide ${index + 1}`} />
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

      {/* Make it yourself */}

      <section className="do_urself">
        <h3>Do It Yourself</h3>
        <div className="all_cooking_feature">
          {cookingfeatures.map((cookingfeature, index) => (
            <div className="single_cook" key={index}>
              <img src={cookingfeature.logo} alt={cookingfeature.name} />
              <p>{cookingfeature.name}</p>
            </div>
          ))}
        </div>
        <div className="all_cooking-content">
          <p>
            We offer residents the option to cook their own meals. This
            self-cooking option is ideal for those who prefer to have more
            control over what they eat or have specific dietary requirements
            that cannot be met by the regular meals offered at The Next Door.
          </p>
          <p>
            The self-cooking option at The Next Door also provides residents
            with the flexibility to cook their meals at their own pace and
            schedule. This is particularly beneficial for those who have busy
            schedules and cannot always make it to the dining area during the
            regular meal times.
          </p>
        </div>

        {/* Slider for Cooking related Images */}

        <div className="">
          <Slider ref={setSliderRefCooking} {...settingCookingImages}>
            {imageUrlsForCooking.map((url, index) => (
              <div key={index} className="slider-item p-2">
                <img src={url} alt={`Slide ${index + 1}`} />
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

      {/* Fitness Area */}

      <section className="fitness_space">
        <h3>Fitness Space</h3>
        <div className="fitness_content">
          <p>
            We offer residents a dedicated fitness space to help them maintain
            their physical health and fitness. The fitness space is
            well-equipped and designed to cater to the fitness needs of
            residents, regardless of their fitness level.
          </p>
        </div>

        {/* Slider For Fitness Related Images */}
        <div className="mb-3">
          <Slider ref={setSliderRefFitness} {...settingFitnessImages}>
            {imageUrlsForFitness.map((url, index) => (
              <div key={index} className="slider-item p-2">
                <img src={url} alt={`Slide ${index + 1}`} />
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

      {/* Lounge Area */}

      <section className="lounge_area_">
        <h3>Lounge Area</h3>
        <div className="lounge_area_content">
          <p>
            We provide residents a comfortable and inviting lounge area each
            floor where they can relax, socialize, and unwind. The lounge area
            is well-designed and provides residents with a welcoming environment
            to spend their leisure time.
          </p>
        </div>

        <div className="mb-3">
          <Slider ref={setSliderRefLoungue} {...settingloungeImages}>
            {imageUrlsForlounge.map((url, index) => (
              <div key={index} className="slider-item p-2">
                <img src={url} alt={`Slide ${index + 1}`} />
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
      <div className="mb-3">
        <Slider ref={setSliderRefReview} {...settingReviewImages}>
          {reviewImages.map((url, index) => (
            <div key={index} className="slider-item p-2">
              <img src={url} alt={`Slide ${index + 1}`} />
              <div style={{ backgroundColor: "#EAEAEA" }}>
                <h4 className="pt-3 ps-3">Lorem Ipsum</h4>
                <div className="p-4" style={{ textAlign: "justify" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
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
        {amenities.map((amenitiy, index) => (
          <div key={index} className="amenitiy">
            <h6>{amenitiy.name}</h6>
            <p>{amenitiy.details}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Amenties;
