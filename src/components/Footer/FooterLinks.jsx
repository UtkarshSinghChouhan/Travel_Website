import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ heading, text1, text2, text3, text4 }) => {
  return (
    <div className="footer-link-items">
      <h2>{heading}</h2>
      <Link to="/sign-up">{text1}</Link>
      <Link to="/">{text2}</Link>
      <Link to="/">{text3}</Link>
      <Link to="/">{text4}</Link>
    </div>
  );
};

export default FooterLinks;
