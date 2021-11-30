import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";

import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Confirmation message seen on success page after filling the contact form out
  const ConfirmationMessage = (
    <div className={styles.confirmed}>
      <p>
        Thank you for submitting this form. You should receive response within
        24-48 hours.
      </p>

      <button onClick={() => setSubmitted(false)}>
        Submit Another Response
      </button>
    </div>
  );

  const ContactForm = (
    <form
      className="container"
      method="POST"
      name="contact-form"
      action="/"
      onSubmit={() => setSubmitted(true)}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${name}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>  

      <div className={styles.nameAndCompany}>
        <div className={styles.name}>
          <input
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className={styles.company}>
          <input
            id="company"
            name="company"
            required
            type="text"
            placeholder="Company"
          />
        </div>
      </div>

      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="E-mail Address"
      />
      <textarea
        id="message"
        name="message"
        required
        placeholder="Message"
        rows="8"
      />
      <button type="submit">Submit</button>
    </form>
  );

  return (
    <div className={styles.contact}>
      <h1>Get In Touch With Us</h1>
      <p>We always make sure to respond to our clients as soon as possible</p>
      {!submitted ? ContactForm : ConfirmationMessage}
    </div>
  );
}
