import React from "react";
import "./Contact.css";
import coverImg from "../../../images/contactUsCover.png";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <section className="contact-container">
        <div className="contact-form">
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>
            Let us know if you have a problem and we will fix it as soon as
            possible
          </p>
          <form action="">
            <input type="text" placeholder="Your Name " required></input>
            <input type="email" placeholder="E-mail " required></input>
            <input type="text" placeholder="Write a Subject" required></input>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <input
              type="submit"
              name=""
              value={"Submit"}
              className="submit-btn"
            ></input>
          </form>
        </div>
        <div className="contact-img">
          <img alt="cover image" src={coverImg} />
        </div>
      </section>
    </div>
  );
};

export default Contact;
