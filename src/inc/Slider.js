import React from "react";
import Carousel from "react-bootstrap/Carousel";
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
        <Carousel indicators={false} variant="dark">
          <Carousel.Item>
            <img src={Getfam} class="d-block" alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Abay} class="d-block" alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Zefmesh} class="d-block" alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Taye} class="d-block" alt="..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Ambassador} class="d-block" alt="..." />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
