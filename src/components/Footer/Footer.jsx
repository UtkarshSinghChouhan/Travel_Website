import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import { FaTypo3 } from "react-icons/fa";
import Button from "../Button";
import { footerLinkInfo, socialInfo } from "../../constants";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the Adventure newsletter to receive our best vacation deals
          </p>

          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>

          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your Email "
                className="footer-input"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>

        <div className="footer-links">
          <div className="footer-link-wraper">
            {footerLinkInfo.slice(0, 2).map((obj) => {
              const { heading, text1, text2, text3, text4 } = obj;

              return (
                <FooterLinks
                  key={obj.id}
                  heading={heading}
                  text1={text1}
                  text2={text2}
                  text3={text3}
                  text4={text4}
                />
              );
            })}
          </div>

          <div className="footer-link-wraper">
            {footerLinkInfo.slice(2, footerLinkInfo.length).map((obj) => {
              const { heading, text1, text2, text3, text4 } = obj;

              return (
                <FooterLinks
                  key={obj.id}
                  heading={heading}
                  text1={text1}
                  text2={text2}
                  text3={text3}
                  text4={text4}
                />
              );
            })}
          </div>
        </div>

        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                TRVL <FaTypo3 />
              </Link>
            </div>

            <small className="website-rights">
              TRVL &copy; {new Date().getFullYear()}
            </small>

            <div className="social-icons">
              {socialInfo.map((obj) => {
                const { id, label, classInfo, icon } = obj;

                return (
                  <Link
                    key={id}
                    to="/"
                    target="_blank"
                    aria-label={label}
                    className={`social-icon-link ${classInfo}`}
                  >
                    {icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
