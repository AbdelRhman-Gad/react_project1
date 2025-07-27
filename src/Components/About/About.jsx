import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <section className="home d-flex justify-content-center align-items-center text-white">
        <div className="container">
          <h2 className="text-uppercase fs-1 fw-bolder text-center">
            about component
          </h2>
          <div className="star d-flex align-items-center justify-content-center py-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
          <div className="row container">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
