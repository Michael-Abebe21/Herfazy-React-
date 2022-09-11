import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

function Form() {
  const [fullName, setFullName] = useState("");
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
    if (!validateName() || !validateEmail() || !validateMessage()) {
      alert("Please fill all the inputs");
      event.preventDefault();
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
