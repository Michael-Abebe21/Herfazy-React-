import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <div className="App">
        <nav
          div="navigation-bar"
          class="navbar navbar-expand-lg navbar-light bg-light"
          aria-label="Offcanvas navbar large"
        >
          <div class="container-fluid">
            <a class="Nav-img-link" href="/">
              <img src="Images/Untitled_design-removebg-preview.png" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end text-white bg-light"
              tabindex="-1"
              id="offcanvasNavbar2"
              aria-labelledby="offcanvasNavbar2Label"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbar2Label">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  class="btn-close btn-close-dark"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle nav-services"
                      href="#services"
                      id="offcanvasNavbarLgDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="offcanvasNavbarLgDropdown"
                    >
                      <li>
                        <a class="dropdown-item" href="/Tourism">
                          Tourism and hospitality
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Governance">
                          Governance and public administration
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Risk">
                          Risk Management
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item outer-link">
                    <a class="nav-link" href="https://herfazyresort.com/">
                      Our Resort
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/contact" class="nav-href nav-link">
                      <button class="button nav-button-link">Contact</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
