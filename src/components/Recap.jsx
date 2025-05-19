import React from "react";

function Recap() {
  return (
    <section className="recap-section">
      <div className="recap-content">
        <div className="recap-text">
          <svg
            width="812"
            height="705"
            viewBox="0 0 812 705"
            fill="none"
            style={{
              position: "absolute",
              left: "-3rem",
              top: 0,
              maxHeight: "100%",
              maxWidth: "100%",
              zIndex: -1,
            }}
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-0 -z-10 max-h-full max-w-full ltr:-left-12 rtl:-right-12 rtl:-rotate-180 rtl:-scale-y-100"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M811.5 705H596.5H401.5L309.092 648.995L-36 449.991C81.9193 271.136 235.461 117.778 414.53 0L811.5 705Z"
              fill="#987BFF"
            ></path>
          </svg>
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/1gbFl4Q7C1bI7YyssruI2V/637b666df8a9d2330d6e6ea81b7fe307/Button-3.png?fm=webp&w=70&h=70"
            alt="youtube-logo"
          />
          <h4>Watch Riyadh Season 2023 Recap</h4>
          <button className="btn btn-primary">Watch more moment</button>
        </div>
        <div className="recap-video">
          <video
            width={600}
            height={400}
            controls
            src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
          ></video>
        </div>
      </div>
      <button className="btn">Watch more moment</button>
    </section>
  );
}

export default Recap;
