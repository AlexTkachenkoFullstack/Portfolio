import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    emailjs.send('service_nxkgdnh','template_ifk2pga', data, 'iIWv74HMG482oDKNy')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>oleksandrtkachenko202@gmail.com</h5>
            <a
              href="mailto:oleksandrtkachenko202@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>Telegram to</h5>
            <a
              href="http://t.me/alex_goltf"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+380637173812</h5>
            <a
              href="https://api.whatsapp.com/send?phone+380637173812"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
