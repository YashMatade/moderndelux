import React, { useState, useEffect } from "react";
import Logo from "../../assets/MDlogo.jpg";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./Footer.css";
import BImg from "../../assets/MDlogo.jpg";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          <footer>
            <div className="mobile_footer">
              <div className="">
                <LazyLoad height={32} offset={100}>
                  <img
                    src={Logo}
                    className="mb-3"
                    style={{ width: "200px" }}
                    alt="Footer Logo"
                    loading="lazy"
                  />
                </LazyLoad>
                <div className="footer_social_icons">
                  <FaSquareInstagram />
                  <IoLogoWhatsapp />
                  <IoLogoWhatsapp />
                </div>
              </div>
              <div className="mobile_footer-links">
                <Link to="/about">About</Link>
                <Link to="/terms">T&C</Link>
                <Link to="/refer-earn">Refer & Earn</Link>
                <Link to="/faqs">FAQS</Link>
                <Link to="/refunds">Refunds</Link>
                <Link to="/careers">Careers</Link>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <>
          <div className="footer_img">
            <img src={BImg} alt="" />
          </div>
          <footer>
            <div className="mobile_footer">
              <div className="mobile-footer-logo">
                <LazyLoad height={32} offset={100}>
                  <img src={Logo} alt="Footer Logo" loading="lazy" />
                </LazyLoad>
              </div>

              <div className="mobile_footer-links">
                <Link to="/about">About</Link>
                <Link to="/terms">T&C</Link>
                <Link to="/refer-earn">Refer & Earn</Link>
                <Link to="/faqs">FAQS</Link>
                <Link to="/refunds">Refunds</Link>
                <Link to="/careers">Careers</Link>
              </div>

              <div className="footer_social_icons">
                <FaSquareInstagram />
                <IoLogoWhatsapp />
                <IoLogoWhatsapp />
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Footer;
