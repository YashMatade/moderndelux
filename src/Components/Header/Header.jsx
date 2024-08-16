import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import BLogo from "../../assets/MDlogo.jpg";
import Call from "/call.svg";
import Menu from "/menu.svg";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import LazyLoad from "react-lazyload";
import Logo from "../../assets/MDlogo.jpg";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {isMobile ? (
        <>
          <header>
            <nav className="navbar_mobile">
              <div className="main_logo">
                <LazyLoad height={32} offset={100}>
                  <Link to={"/"}>
                    <img src={Logo} alt="Logo" loading="lazy" />
                  </Link>
                </LazyLoad>
              </div>
              <div className="_main_contact">
                <IoLogoWhatsapp fontSize={32} />
                <LazyLoad height={32} offset={100}>
                  <img src={Call} alt="Call" loading="lazy" />
                </LazyLoad>
              </div>
              <div className="main_toggle_ham_">
                <LazyLoad height={32} offset={100}>
                  <img
                    src={Menu}
                    alt="Menu"
                    loading="lazy"
                    onClick={toggleMenu}
                  />
                </LazyLoad>
              </div>
            </nav>
          </header>

          {menuOpen && (
            <div className="main_ham">
              <div className="hamburger">
                <div className="links_nav">
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Property
                  </Link>
                  <Link
                    className={location.pathname === "/aboutus" ? "active" : ""}
                  >
                    About us
                  </Link>
                  <Link
                    className={
                      location.pathname === "/properties" ? "active" : ""
                    }
                  >
                    Properties
                  </Link>
                  <Link
                    className={location.pathname === "/gallery" ? "active" : ""}
                  >
                    Our Gallery
                  </Link>
                  <Link
                    className={
                      location.pathname === "/amenties" ? "active" : ""
                    }
                  >
                    Amenties
                  </Link>
                  <Link
                    className={
                      location.pathname === "/contactus" ? "active" : ""
                    }
                  >
                    Contact
                  </Link>
                  <Link
                    className={
                      location.pathname === "/frequentlyaskedquestions"
                        ? "active"
                        : ""
                    }
                  >
                    FAQs
                  </Link>

                  <div className="ham-logo">
                    <LazyLoad height={32} offset={100}>
                      <img src={BLogo} alt="logo" loading="lazy" />
                    </LazyLoad>
                  </div>
                </div>
                <div className="ham-close">
                  <IoMdClose onClick={toggleMenu} />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <header>
            <nav className="navbar_desktop">
              <div className="row">
                <div className="col-lg-2">
                  <div className="main_logo">
                    <LazyLoad height={32} offset={100}>
                      <Link to={"/"}>
                        <img src={Logo} alt="Logo" loading="lazy" />
                      </Link>
                    </LazyLoad>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="header_menu mt-4">
                    <Link
                      to="/"
                      className={location.pathname === "/" ? "active" : ""}
                    >
                      Home
                    </Link>
                    <Link
                      className={
                        location.pathname === "/aboutus" ? "active" : ""
                      }
                    >
                      About us
                    </Link>

                    <Link
                      className={
                        location.pathname === "/gallery" ? "active" : ""
                      }
                    >
                      Gallery
                    </Link>
                    <Link
                      className={
                        location.pathname === "/properties" ? "active" : ""
                      }
                    >
                      Properties
                    </Link>
                    <Link
                      className={
                        location.pathname === "/amenties" ? "active" : ""
                      }
                    >
                      Amenities
                    </Link>
                    <Link
                      className={
                        location.pathname === "/contactus" ? "active" : ""
                      }
                    >
                      Contact us
                    </Link>

                    <Link
                      className={
                        location.pathname === "/frequentlyaskedquestions"
                          ? "active"
                          : ""
                      }
                    >
                      FAQS
                    </Link>
                  </div>
                </div>
                <div className="col-lg-1 mt-4">
                  <div className="_main_contact">
                    <IoLogoWhatsapp fontSize={32} />
                    <LazyLoad height={32} offset={100}>
                      <img src={Call} alt="Call" loading="lazy" />
                    </LazyLoad>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </>
      )}
    </div>
  );
};

export default Header;
