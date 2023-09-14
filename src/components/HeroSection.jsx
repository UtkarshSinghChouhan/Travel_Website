import React from "react";
import "./HeroSection.css";
import { FaPlayCircle } from "react-icons/fa";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WATCH TRAILER <FaPlayCircle className="fa-play-circle" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

// ../public/images/img-1.jpg
