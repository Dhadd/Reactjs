import React from "react";
import "./card.css";

const Card = ({ cardData }) => {
  return (
    <>
      {cardData.map((card) => (
        <div className="individualCard">
          <div className="topSection">
            <img
              style={{
                width: "100px",
              }}
              src={card.image}
              alt="Main Image"
            />
            <div className="topBottomSection">
              <h5>{card.product_name}</h5>
              <p style={{ opacity: "0.5" }}>{card.brand_name}</p>
              <p>{card.price}</p>
            </div>
          </div>
          <div className="bottomSection">
            <div className="bottomTopSectio">
              <p>Location</p>
              <p>{card.date}</p>
            </div>
            <p>{card.discription}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
