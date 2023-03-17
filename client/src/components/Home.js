import React from "react";

export default function Home() {
  return (
    <div style={{ paddingTop: "55px" }}>
      <div
        id="carouselExampleInterval"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={5000}>
            <img src="./sample/b1.gif" className="d-block w-100" alt="w1" />
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src="./sample/b2.gif" className="d-block w-100" alt="w2" />
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src="./sample/b3.gif" className="d-block w-100" alt="w3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
