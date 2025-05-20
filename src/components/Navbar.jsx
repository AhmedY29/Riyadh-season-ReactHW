import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="burger-menu">
        <img
          src="https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg"
          width={50}
          alt=""
        />
      </div>
      <div className="logo">
        <img
          src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png?fm=webp&w=85&h=110"
          alt="logo"
        />
      </div>
      <div className="btns">
        <button className="btn">العربية</button>
        <button className="btn btn-primary view-booklet">View Booklet</button>
      </div>
    </nav>
  );
}

export default Navbar;
