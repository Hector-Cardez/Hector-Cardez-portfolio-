import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import Linkedin from "../img/linkedin_logo.png";
import styled from "styled-components";

const Style = styled.div`
  label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
  }

  input,
  textarea,
  form .submit-btn {
    width: 100%;
    max-width: 80%;
    border: none;
    border-bottom: #777 solid 3px;
    background-color: transparent;
    color: #fff;
    text-align: center;
    margin-bottom: 17px;
  }

  textarea::placeholder {
    padding-top: 15px;
    color: rgba(255, 255, 255, 0.954);
  }

  .content-wrapper textarea {
    min-height: 70px;
    resize: none;
  }

  form .submit-btn {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 30px;
    transition: background-color 0.3s ease;
  }

  form .submit-btn:hover {
    background-color: #0056b3;
  }

  .footer-container {
    margin-top: 10px;
  }

  .footer {
    text-align: center;
    color: #fff;
  }

  .content-wrapper .error {
    color: red;
    font-size: 14px;
    margin: 0;
  }
  .logo_footer {
    margin-top: 5px;
    width: 30px;
    height: 30px;
  }

  @media (max-height: 2000px) {
    transform: scale(1, 1);
    font-size: 1rem;
    position: relative;
    font-weight: 400;
    top: 0px;
  }

  @media (max-height: 815px) {
    transform: scale(1, 1);
    font-size: 1rem;
    position: relative;
    font-weight: 400;
    top: -30px;
  }

  @media (max-height: 715px) {
    transform: scale(1, 1);
    font-size: 0.9rem;
    position: relative;
    top: -35px;
  }

  @media (max-height: 650px) {
    transform: scale(1, 0.8);
    font-size: 0.8rem;
    position: relative;
    top: -80px;
  }

  @media (max-height: 560px) {
    form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, auto);
      gap: 0.2rem 0rem;
      max-width: 1300px;
      margin: 0px;
    }
    .char-count {
      position: relative;
      top: -30px;
    }
  }

  @media (max-height: 389px) {
    transform: scale(1, 0.6);
    font-size: 0.8.5rem;
    position: relative;
    top: -100px;
  }
`;

const Contact = () => {
  const maxChars = 1000;

  const [message, setMessage] = useState("");
  const [remaining, setRemaining] = useState(maxChars);

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
          setMessage("");
          setRemaining(maxChars);
          e.target.reset();
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
    <div id="contact" className="content-wrapper">
      <div className="background-blur bg-contact"></div>

      {/* Content */}
      <div className="wrapper-inner">
        <h2 className="section-header">Contact</h2>

        <Style>
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
              placeholder="I'd love to hear from you..."
            ></textarea>
            <p className="char-count">
              {remaining} / {maxChars}
            </p>
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
          <div className="footer-container">
            <div className="footer">
              © Cardez. All rights reserved.
              <div>Empowering web solutions with a creative edge</div>
              <a
                href="https://www.linkedin.com/in/hector-carvajal-hernandez-52a970334/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="logo_footer"
                  src={Linkedin}
                  alt="Logo Linkedin"
                />
              </a>
            </div>
          </div>
        </Style>
      </div>
    </div>
  );
};

export default Contact;
