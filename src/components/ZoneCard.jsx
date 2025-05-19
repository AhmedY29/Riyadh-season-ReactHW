import React from "react";

function ZoneCard(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImg})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        width: 400,
        height: 300,
        marginBottom: 20,
      }}
      className={`zone-card ${props.newZone ? "new-zone" : ""}`}
    >
      {props.newZone ? <span>NEW!</span> : ""}
      <div className="zone-images">
        <img src={props.zoneLogo} width={130} alt="" />

        {props.image2 ? <img src={props.sponsorLogo} width={100} alt="" /> : ""}
      </div>
    </div>
  );
}

export default ZoneCard;
