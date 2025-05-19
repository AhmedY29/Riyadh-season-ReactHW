import React from "react";

function PartnerCard(props) {
  return (
    <div className="partner">
      <h2>{props.title}</h2>
      <div className="partners-img">
        {props.partnersImg.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              width={100}
              height={55}
              alt="partner-img"
            />
          );
        })}
      </div>
    </div>
  );
}

export default PartnerCard;
