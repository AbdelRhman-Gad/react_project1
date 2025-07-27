import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <div className="contact-section container">
        <section className="d-flex justify-content-center">
          <div className="text-center">
            <h2 className="text-uppercase pt-5 fs-1 fw-bolder">
              Contact Section
            </h2>
            <div className="star d-flex align-items-center justify-content-center py-3">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>
            </div>
          </div>
        </section>
        <section>
          <div className="row justify-content-center pt-4">
            <div className="col-md-6">
              <form action="">
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="User Name"
                  className="form-control"
                />
                <input
                  type="text"
                  id="userAge"
                  name="userAge"
                  placeholder="Age"
                  className="form-control mt-5"
                />
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  placeholder="E-mail"
                  className="form-control mt-5"
                />
                <input
                  type="password"
                  id="userPassword"
                  name="userPassword"
                  placeholder="Password"
                  className="form-control mt-5"
                />
                <button className="btn mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
