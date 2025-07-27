import React from "react";
import avatar from "../../assets/avataaars.svg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="home d-flex justify-content-center align-items-center text-white">
        <div className="text-center">
          <img className="" src={avatar} alt="avatar" />
          <h2 className="text-uppercase pt-5 fs-1 fw-bolder">
            Start Framework
          </h2>
          <div className="star d-flex align-items-center justify-content-center py-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
