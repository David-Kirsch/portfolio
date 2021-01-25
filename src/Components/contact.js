import React from "react";
import emailjs from "emailjs-com";
import "./contact.css";

export default function contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fm9z2mq",
        "template_nryrxri",
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID_KEY
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact-comment">
        If you have any questions or comments, feel free to send me a message.
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <hr />
      <div className="footer">
        Built & Designed by David Kirsch 2020
        <br />
      </div>
    </div>
  );
}
