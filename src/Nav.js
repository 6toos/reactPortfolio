import React from "react";
// import bgImage from "../assets/6-CRAFT.jpg";

export function Nav() {
  function activate() {
    // navlink.classList.toggle("active");
    for (nav_link of navlink) {
      nav_link.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="#">
            {/* <span style={{ color: "aqua" }}>6</span>toos */}
            <img src="./assets/bgImage.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  onClick={activate}
                  className="nav-link active"
                  aria-current="page"
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
        </div>
      </nav>
    </>
  );
}
