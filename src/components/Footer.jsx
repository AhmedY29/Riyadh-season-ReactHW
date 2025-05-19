import React from "react";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo-social">
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png"
            alt="logo"
          />
          <div className="social-logos">
            <a className="btn" href="#">
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/12dxmhGOwDp0O60rGkGaoU/2316038e3becb17702597cf2782052f1/Button-1.png?fit=pad&w=55&h=55"
                alt=""
              />
            </a>
            <a className="btn" href="#">
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/7FPODYVihpzuYzN2hoDlD2/1e889247bc73807bd4844d210f91e2db/Button.png?fit=pad&w=55&h=55"
                alt=""
              />
            </a>
            <a className="btn" href="#">
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/6vlq9w8miTqnUyvaPVTGlt/c7098a6a02a829656ad0150412caa439/Button-2.png?fit=pad&w=55&h=55"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="footer-copy">
          <ul>
            <li>
              <a href="#">العربية</a>
            </li>
            <li>
              <a href="#">PRIVACY POLICY</a>
            </li>
            <li>
              <a href="#">TERMS & CONDITIONS</a>
            </li>
          </ul>

          <h5>
            Copyright © 2024 RIYADH SEASON. All rights reserved.||{" "}
            <span>
              Made By{" "}
              <a href="https://github.com/AhmedY29" target="_blank">
                Ahmed Alsaleh
              </a>
            </span>
          </h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
