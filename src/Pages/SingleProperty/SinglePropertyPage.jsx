import React, { lazy, useEffect, useState } from "react";

const Search = lazy(() => import("../../Components/Search/Search"));
const Header = lazy(() => import("../../Components/Header/Header"));
const ProperyDetails = lazy(() => import("./ProperyDetails"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
const SinglePropertyPage = () => {
  const [screen, setScreen] = useState();

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Search />
      <ProperyDetails />
      <Footer />
    </div>
  );
};

export default SinglePropertyPage;
