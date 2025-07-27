import React from "react";
import { NavLink, Link } from "react-router";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4 sticky-top">
        <div className="container">
          <Link
            className="navbar-brand text-white text-uppercase fs-2 fw-bolder"
            to="/"
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link  text-white fs-5 fw-semibold"
                  aria-current="page"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  text-white fs-5 fw-semibold"
                  to="portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  text-white fs-5 fw-semibold"
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
