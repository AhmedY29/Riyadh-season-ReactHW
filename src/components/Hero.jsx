import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="text-section">
        <div className="text-content">
          <div className="text">
            <h1>Welcome To Riyadh Season 2024</h1>
          </div>
          <div className="btns">
            <button className="btn ">Explore</button>
            <button className="btn btn-primary">Book Tickets</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
