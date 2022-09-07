import React from "react";
import Footer from "./inc/Footer";
import Video from "./Images/Birds_home_reduced.mp4";
import Fantu from "./Images/Mr.fantugola.jpg";
import Slider from "./inc/Slider";

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
              <a href="/about">About Us</a>
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
              <a href="/Tourism">
                <button>Know more</button>
              </a>
            </div>
          </div>
          <div class="services__card2">
            <h2>Governance and public administration</h2>
            <p>
              Help public and private organizations to deliver high quality and
              transparent services to the best satisfaction of customers.{" "}
            </p>
            <div class="services__btn">
              <a href="/Governance">
                <button>Know more</button>
              </a>
            </div>
          </div>
          <div class="services__card3">
            <h2>Risk Management</h2>
            <p>
              We help in identifying, assessing and controlling threats to an
              organization's capital, earnings and business success.{" "}
            </p>
            <div class="services__btn">
              <a href="/Risk">
                <button>Know more</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Slider />

      <div class="background">
        <div class="contact-container " id="contact-container">
          <form
            action="https://formsubmit.co/fantu.golasiyoom@gmail.com"
            method="POST"
          >
            <div class="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="firstName"
                id="contact-name"
                onkeyup="validateName"
              />
              <span id="name-error"></span>
            </div>

            <div class="input-group">
              <label>Phone No.</label>
              <input
                type="number"
                placeholder="09 -- -- -- --"
                name="phone"
                id="contact-phone"
                onkeyup="validatePhone()"
              />
              <span id="phone-error"></span>
            </div>

            <div class="input-group">
              <label>Email Id</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                id="contact-email"
                onkeyup="validateEmail()"
              />
              <span id="email-error"></span>
            </div>

            <div class="input-group">
              <label>Your Message</label>
              <textarea
                rows="5"
                placeholder="Enter your message"
                name="message"
                id="contact-message"
                onkeyup="validateMessage()"
              ></textarea>
              <span id="message-error"></span>
            </div>

            <button onclick="return validateForm()">Submit</button>
            <span id="submit-error"></span>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
