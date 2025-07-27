import React from "react";
import "./Info.css";
export default function Info() {
  return (
    <>
      <section className="contact-info py-5">
        <div className="container">
          <div className="row justify-content-evenly text-center text-white">
            <div className="col-md-3 pb-4">
              <div className="item">
                <h3 className="fw-bold">Location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-3 pb-4">
              <div className="item">
                <h3 className="fw-bold">AROUND THE WEB</h3>
                <i className="fa-brands fa-facebook me-3 fs-3"></i>
                <i className="fa-brands fa-twitter me-3 fs-3"></i>
                <i className="fa-brands fa-linkedin-in me-3 fs-3"></i>
                <i className="fa-solid fa-globe me-3 fs-3"></i>
              </div>
            </div>
            <div className="col-md-3 pb-4">
              <div className="item">
                <h3 className="fw-bold">ABOUT FREELANCER</h3>
                <p>Licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
