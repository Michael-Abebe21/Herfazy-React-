import React from "react";
import Logo from "../Images/Untitled_design-removebg-preview.png";

function Footer() {
  return (
    <div>
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top">
        <div class="col mb-3 footer-alignment">
          <a
            href="/home"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none footer-img-link"
          >
            <img src={Logo} />
          </a>
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
              <a href="">P.O.Box 1519</a>
            </li>
          </ul>
        </div>

        <div class="col mb-3 link">
          <h5>Socials</h5>
          <ul class="nav flex-column">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
