import React from "react";
// import bgImage from "./bgImage.png"

export function Nav() {
  function activate() {
    // navlink.classList.toggle("active");
    for (nav_link of navlink) {
      nav_link.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
  }
  function Logo(props) {
    // const display = <img src={bgImage} />;
    return display;
  }
  return (
    <>
      {/* <Logo/> */}
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid justify-content-between" id="navbar">
            <a href="" className="navbar-brand">
              6t<span>oo</span>s
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-content">
                <li className="nav-item">
                  <a
                    onClick={activate}
                    className="nav-link active"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={activate} className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={activate} className="nav-link" href="#service">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={activate} className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={activate} className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item" id="download">
                  <a
                    href="img/Sixtus_Offoegbu.pdf"
                    download=""
                    className="nav-link"
                  >
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
