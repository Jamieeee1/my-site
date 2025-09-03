import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgvvppj");
  if (state.succeeded) {
    return (
      <div className="contact-succeeded">
        <p className="contact-succeeded-p">Thank you!</p>
        <p>Your message has been accepted. You will recieve an answer soon.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="fs-form">
      <div className="fs-field">
        <label className="fs-label" htmlFor="name">
          _Name:
        </label>
        <input className="fs-input" id="name" name="name" required />
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="email">
          _Email:
        </label>
        <input className="fs-input" id="email" name="email" required />
        <p className="fs-description">
          This will help me respond to your query via an email.
        </p>
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="message">
          _Message:
        </label>
        <textarea
          className="fs-textarea"
          id="message"
          name="message"
          required
        />
        <p className="fs-description">What would you like to discuss?</p>
      </div>
      <div className="fs-button-group">
        <button className="fs-button" type="submit">
          submit-message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
