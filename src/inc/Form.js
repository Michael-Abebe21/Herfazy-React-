import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

function Form() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function DisplayName() {
    if (fullName.length === 0) {
      return "";
    }
    if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      return "Write full name";
    }
    return <CheckIcon className="check" />;
  }

  function DisplayPhone() {
    if (phone.length === 0) {
      return "";
    }
    if (phone.length !== 10) {
      return "Phone no should be 10 digits";
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      return "Only digits please";
    }
    return <CheckIcon className="check" />;
  }

  function DisplayEmail() {
    if (email.length === 0) {
      return "";
    }
    // eslint-disable-next-line
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      return "Email Invalid";
    }
    return <CheckIcon className="check" />;
  }

  function DisplayMessage() {
    var required = 30;
    var left = required - message.length;

    if (message.length === 0) {
      return "";
    }

    if (left > 1) {
      return left + " more characters required";
    }

    return <CheckIcon className="check" />;
  }
  function validateName() {
    if (fullName.length === 0) {
      return false;
    }
    if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      return false;
    }
    return true;
  }

  function validatePhone() {
    if (phone.length === 0) {
      return false;
    }
    if (phone.length !== 10) {
      return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      return "Only digits please";
    }
    return true;
  }

  function validateEmail() {
    if (email.length === 0) {
      return false;
    }
    // eslint-disable-next-line
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      return false;
    }
    return true;
  }

  function validateMessage() {
    var required = 30;
    var left = required - message.length;

    if (message.length === 0) {
      return false;
    }

    if (left > 1) {
      return false;
    }

    return true;
  }

  const handleSubmit = (event) => {
    if (
      !validateName() ||
      !validatePhone() ||
      !validateEmail() ||
      !validateMessage()
    ) {
      event.preventDefault();
      alert("Fill all the inputs");
    } else {
    }
  };

  return (
    <form
      action="https://formsubmit.co/fantu.golasiyoom@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div class="input-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="firstName"
          id="contact-name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <span id="name-error">{DisplayName()}</span>
      </div>

      <div class="input-group">
        <label>Phone No.</label>
        <input
          type="tel"
          placeholder="09 -- -- -- --"
          name="phone"
          id="contact-phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <span id="phone-error">{DisplayPhone()}</span>
      </div>

      <div class="input-group">
        <label>Email Id</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          id="contact-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span id="email-error">{DisplayEmail()}</span>
      </div>

      <div class="input-group">
        <label>Your Message</label>
        <textarea
          rows="5"
          placeholder="Enter your message"
          name="message"
          id="contact-message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <span id="message-error">{DisplayMessage()}</span>
      </div>

      <button onclick="return validateForm()">Submit</button>
      <span id="submit-error"></span>
    </form>
  );
}

export default Form;
