import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { cardInfo, cardInfo2 } from "../constants";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cardInfo.map((obj) => {
              const { id, src, text, label } = obj;

              return (
                <CardItem
                  key={id}
                  src={src}
                  text={text}
                  label={label}
                  path="/services"
                />
              );
            })}
          </ul>
          <ul className="cards__items">
            {cardInfo2.map((obj) => {
              const { id, src, text, label } = obj;

              return (
                <CardItem
                  key={id}
                  src={src}
                  text={text}
                  label={label}
                  path="/services"
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
