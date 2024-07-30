import React, { useState } from "react";
import "../styles/form.css";

const Contact = () => {
  const maxChars = 1000; // Set the maximum number of characters

  const [message, setMessage] = useState("");
  const [remaining, setRemaining] = useState(maxChars);

  const handleChange = (event) => {
    const newMessage = event.target.value;

    // Ensure length does not exceed maxChars while displaying the characters already wrtiiten.
    if (newMessage.length <= maxChars) {
      setMessage(newMessage);
      setRemaining(maxChars - newMessage.length);
    }
  };

  return (
    <div id="contact" className="contact sectionHP">
      <div className="emptySpace"></div>
      <br />
      <h2>Contact</h2>

      <form action="/submit_form" method="post">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" maxlength="4" />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" maxlength="20" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" maxlength="30" />

        <label htmlFor="message">Message:</label>

        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
          placeholder="I&rsquo;d love to hear from you..."
          autoFocus
        ></textarea>
        <p className="char-count">
          {remaining} /{maxChars}
        </p>
        <input className="input" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
