import React from "react";
import Zefmesh from "../Images/zefmesh.png";
import Taye from "../Images/Taye.png";
import Getfam from "../Images/getfam-hotel.png";
import Ambassador from "../Images/ambassador.png";
import Abay from "../Images/abaybank.png";

function Slider() {
  return (
    <div>
      <div class="companies">
        <h2>Companies we have worked with</h2>
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item" data-bs-interval="3000">
              <img src={Getfam} class="d-block" alt="..." />
            </div>
            <div class="carousel-item active" data-bs-interval="3000">
              <img src={Abay} class="d-block" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={Zefmesh} class="d-block" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={Taye} class="d-block" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={Ambassador} class="d-block" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
