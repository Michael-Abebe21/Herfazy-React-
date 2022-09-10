import React from "react";
import Footer from "./inc/Footer";
import Video from "./Images/Birds_home_reduced.mp4";
import Fantu from "./Images/Mr.fantugola.jpg";
import Slider from "./inc/Slider";
import Form from "./inc/Form";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div class="home" id="home">
        <div class="content">
          <h1 class="hero__heading">
            Tourism, Hotel and Trade Consulting Company in Ethiopia
          </h1>
          <button class="main__btn">
            <a href="tel:+251911203937">Call now</a>
          </button>
        </div>
        <div class="video-container wrapper">
          <div class="gradient"></div>
          <video src={Video} id="video-slider" loop autoPlay muted></video>
        </div>
      </div>
      <div class="main" id="about">
        <div class="main__container">
          <div class="box">
            <img src={Fantu} class="img-fluid" alt="..." />

            <div class="content">
              <h2>Ato Fantu Gola</h2>
              <h3>
                Fantu Gola is the founder and managing director of Herfazy
                constultancy.
              </h3>
              <p>
                <a href="mailto:fantu.golasiyoom@gmail.com">
                  Email:fantu.golasiyoom@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div class="main__content">
            <h1>What do we do?</h1>
            <h2>We offer consulting for businesses</h2>
            <p>
              Herfazy Consult is a continuation of the Fan Trading & Consultancy
              Services (Fan Consult) which was established in 1993 by Ato Fantu
              Gola. It is certified as Management Consultant by the Ethiopian
              Management Institute and registered with the Ministry of Trade &
              the Ministry of Finance and Economic Development. The headquarter
              is located at a prime area in Addis Ababa, Bole Sub-city, Woreda
              06, Haile Gebreselassie Street, housed in Getahun Beshah Building.
            </p>
            <button class="main__btn">
              <Link to="/about" onClick={() => window.reload()}>
                About Us
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div class="services" id="services">
        <h1>Our Services</h1>
        <div class="services__wrapper">
          <div class="services__card1">
            <h2>Tourism and Hospitality</h2>
            <p>
              Experts of Herfazy Consult served in different hotel
              establishments at various capacities including leading one of the
              largest Government Hotel chain.
            </p>
            <div class="services__btn">
              <Link to="/Tourism" onClick={() => window.reload()}>
                <button>Know more</button>
              </Link>
            </div>
          </div>
          <div class="services__card2">
            <h2>Governance and public administration</h2>
            <p>
              Help public and private organizations to deliver high quality and
              transparent services to the best satisfaction of customers.{" "}
            </p>
            <div class="services__btn">
              <Link to="/Governance" onClick={() => window.reload()}>
                <button>Know more</button>
              </Link>
            </div>
          </div>
          <div class="services__card3">
            <h2>Risk Management</h2>
            <p>
              We help in identifying, assessing and controlling threats to an
              organization's capital, earnings and business success.{" "}
            </p>
            <div class="services__btn">
              <Link to="/Risk" onClick={() => window.reload()}>
                <button>Know more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Slider />

      <div class="background">
        <h1 className="Form-header">Contact Us</h1>
        <div class="contact-container " id="contact-container">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
