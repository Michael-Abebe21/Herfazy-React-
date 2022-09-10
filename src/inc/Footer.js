import React from "react";
import Logo from "../Images/Untitled_design-removebg-preview.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top">
        <div class="col mb-3 footer-alignment">
          <Link
            to="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none footer-img-link"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div class="col mb-3"></div>

        <div class="col mb-3 link">
          <h5>Telephone</h5>
          <ul class="nav flex-column">
            <li>
              <a href="tel:+251116180907">Tel:+251116180907</a>
            </li>
            <li>
              <a href="tel:+251911203937">Mob:+251911203937</a>
            </li>
            <li>
              <a href="tel:+251116180892">Fax:+251116180892</a>
            </li>
          </ul>
        </div>

        <div class="col mb-3 link">
          <h5>Email & P.O. box</h5>
          <ul class="nav flex-column">
            <li>
              <a href="mailto:fantu.golasiyoom@gmail.com">
                fantu.golasiyoom@gmail.com
              </a>
            </li>
            <li>
              <small>P.O.Box 1519</small>
            </li>
          </ul>
        </div>

        <div class="col mb-3 link">
          <h5>Socials</h5>
          <ul class="nav flex-column">
            <li>
              <small>
                <i class="fa fa-facebook"></i>
              </small>
            </li>
            <li>
              <small>
                <i class="fa fa-twitter"></i>
              </small>
            </li>
            <li>
              <small>
                <i class="fa fa-google-plus"></i>
              </small>
            </li>
            <li>
              <small>
                <i class="fa fa-linkedin-square"></i>
              </small>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
