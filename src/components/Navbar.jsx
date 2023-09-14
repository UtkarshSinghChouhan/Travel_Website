import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTypo3, FaTimes, FaBars } from "react-icons/fa";
import { items } from "../constants";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //   window.addEventListener("resize", showButton);
  useEffect(() => {
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
            TRAVL <FaTypo3 className="fa-typo3" />
          </Link>

          <div className="menu-icon" onClick={() => setClick(!click)}>
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {items.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link
                  to={`/${item !== "Home" ? item.toLowerCase() : ""}`}
                  className={`${
                    item === "Sign-Up" ? "nav-links-mobile" : "nav-links"
                  }`}
                  onClick={() => setClick(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
