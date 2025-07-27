import React from "react";
import errormssg from "../../assets/images/images.png";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <div className="not-found d-flex justify-content-center align-items-center">
        <div className="text-center my-5">
          <img src={errormssg} alt="" />
          <h1 className="pt-5">Page Not Found</h1>
        </div>
      </div>
    </>
  );
}
