import React, { useState } from "react";
import folio1 from "../../assets/images/poert1.png";
import folio2 from "../../assets/images/port2.png";
import folio3 from "../../assets/images/port3.png";
import { Modal } from "bootstrap";
import "./Portfolio.css";
export default function Portfolio() {
  let [selectedImage, setSelectedImage] = useState(null);

  let images = [folio1, folio2, folio3, folio1, folio2, folio3];

  let handleImageClick = (img) => {
    setSelectedImage(img);
    let modal = new Modal(document.getElementById("imageModal"));
    modal.show();
  };
  return (
    <>
      <div id="portfolio" className="container">
        <section className="d-flex justify-content-center">
          <div className="text-center">
            <h2 className="text-uppercase pt-5 fs-1 fw-bolder">
              portfolio component
            </h2>
            <div className="star d-flex align-items-center justify-content-center py-3">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>
            </div>
          </div>
        </section>
        <section>
          <div className="row g-5 py-4">
            {images.map((img, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="item position-relative overflow-hidden"
                  onClick={() => handleImageClick(img)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={img} className="w-100" alt="img" />
                  <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus text-white fs-1"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section>
        {/* Bootstrap Modal */}
        <div
          className="modal fade"
          id="imageModal"
          tabIndex="-1"
          aria-labelledby="imageModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body p-0">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Enlarged"
                    className="img-fluid w-100"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
