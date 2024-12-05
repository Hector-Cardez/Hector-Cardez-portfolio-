import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import Linkedin from "../img/linkedin_logo.png";

const Contact = () => {
  const maxChars = 1000; // Set the maximum number of characters

  const [message, setMessage] = useState("");
  const [remaining, setRemaining] = useState(maxChars);

  useEffect(() => {}, []);

  const handleChange = (event) => {
    const newMessage = event.target.value;
    if (newMessage.length <= maxChars) {
      setMessage(newMessage);
      setRemaining(maxChars - newMessage.length);
    }
  };

  const validateForm = () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    if (!firstName || !lastName || !email || !message) {
      alert("Please fill out all fields.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");

          // Reset form fields
          setMessage("");
          setRemaining(maxChars);
          e.target.reset(); // Clear the form fields
        },
        (error) => {
          console.error("Error sending email:", error);
          alert(
            "Failed to send the message, please try again. Error details: " +
              error.text
          );
        }
      );
  };

  return (
    <div id="contact" className="contact sectionHP">
      <div className="emptySpace"></div>
      <br />
      <h2>Contact</h2>
      <form onSubmit={sendEmail} method="POST">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" maxLength="40" />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" maxLength="40" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" maxLength="50" />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
          placeholder="I&#39;d love to hear from you..."
          autoFocus
        ></textarea>
        <p className="char-count">
          {remaining} / {maxChars}
        </p>
        <input className="input" type="submit" value="Submit" />
      </form>
      <br />

      <div className="footer-container">
        <div className="footer">
          © 2024 Cardez. All rights reserved.
          <div>Empowering web solutions with a creative edge</div>
          <a
            href="https://www.linkedin.com/in/hector-carvajal-hernandez-52a970334/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logo_footer" src={Linkedin} alt="Logo Linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
