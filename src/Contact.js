import React from "react";

function Contact() {
  return (
    <div>
      <div class="background">
        <div class="container text-center">
          <div class="row">
            <h1 class="contact-heading">Contact Us</h1>
            <div class="contact-container col-md-6" id="contact-container">
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
                    onkeyup="validateName()"
                  />
                  <span id="name-error"></span>
                </div>

                <div class="input-group">
                  <label>Phone No.</label>
                  <input
                    type="tel"
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
            <div class="col">
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">
                      <i class="fa fa-phone"></i> Telephone
                    </h6>
                  </div>
                  <span>
                    <a href="tel:+251116180907">+251116180907</a>
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">
                      <i class="fa fa-phone"></i> Mobile
                    </h6>
                  </div>
                  <span>
                    <a href="tel:+251911203937">+251911203937</a>
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">
                      <i class="fa fa-fax"></i> FAX
                    </h6>
                  </div>
                  <span>
                    <a href="tel:+251116180892">+251116180892</a>
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">
                      <i class="fa fa-envelope"></i> Email
                    </h6>
                  </div>
                  <span>
                    <a href="mailto:fantu.golasiyoom@gmail.com">
                      fantu.golasiyoom@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
