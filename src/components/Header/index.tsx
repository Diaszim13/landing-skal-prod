import { List, X } from "phosphor-react";
import { useState } from "react";
import skalLogoImg from "../../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

import "./style.css";
import ReactCountryFlag from "react-country-flag";

export function Header() {
  const [isMobileButtonActive, setIsMobileButtonActive] = useState(false);

  window.onscroll = () => setIsMobileButtonActive(false);

  return (
    <header
      className="header-page"
      onScroll={() => setIsMobileButtonActive(false)}
    >
      <div className={isMobileButtonActive ? "active" : ""}>
        <div className="logo">
          <img src={skalLogoImg} alt="logo skal" />
        </div>
        <nav>
          <Link to="home" smooth={true}>
            Home
          </Link>
          <Link to="message" smooth={true} marginWidth={100}>
            About
          </Link>
          <Link to="roadmap" smooth={true}>
            Roadmap
          </Link>
        </nav>
        <div className="header-buttons">
          <a href="https://drive.google.com/file/d/1kdvfxHulrfuHVLe0EfnmlKZs1AsOye71/view?usp=sharing" target="_blank">
            <button className="btn-litepaper">Litepaper</button>
          </a>
          {/* <span>
              <ReactCountryFlag
                countryCode="BR"
                svg
                style={{
                  width: "28px",
                  height: "24px",
                }}
              />
            </span> */}
        </div>
        <button
          className="btn-mobile"
          onClick={() => setIsMobileButtonActive(!isMobileButtonActive)}
        >
          {isMobileButtonActive ? <X size={32} /> : <List size={32} />}
        </button>
      </div>
    </header>
  );
}
