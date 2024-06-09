import React from "react";
import bgImage from "./bgImage.png"

export function Nav() {
    function activate() {
      // navlink.classList.toggle("active");
      for (nav_link of navlink) {
        nav_link.classList.remove("active");
      }
      event.currentTarget.classList.add("active");
    }
    function Logo(props) {
        const display = <img src={bgImage} />;
        return display;
    }
    return (
        <>
            <Logo/>
        <div className="container">
          <nav className="nav">
            <div className="navbar" id="navbar">
              <a href="" className="brand">
                6t<span>oo</span>s
              </a>
              <div className="menu">
                <ul className="navbar-content" id="nav-content">
                  <li>
                    <a
                      onClick={activate}
                      className="navbar-item active"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={activate}
                      className="navbar-item"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={activate}
                      className="navbar-item"
                      href="#service"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={activate}
                      className="navbar-item"
                      href="#portfolio"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={activate}
                      className="navbar-item"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="navbar-last" id="download">
                    <a href="img/Sixtus_Offoegbu.pdf" download="">
                      Download CV
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hamburger">
                <span className="menu" id="menu">
                  <i className="fas fa-bars menu-btn"></i>
                </span>
                <span className="close" id="close">
                  <i className="fas fa-times close-btn"></i>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
}