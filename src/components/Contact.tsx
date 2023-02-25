import React, { useRef, useState } from "react";

import emailjs from "emailjs-com";

import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

type MessageFunction = (state: boolean) => void;

const contactInfo = [
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-8 h-8"
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
    text: "/Kevin Butvilofsky",
    link: "https://www.linkedin.com/in/kevin-butvilofsky/",
  },
];

function Contact() {
  const formRef = useRef(null);
  const [formError, setformError] = useState(false);
  const [formSuccess, setformSuccess] = useState(false);

  const activateMessage = (formState: MessageFunction) => {
    formState(true);
    setTimeout(() => formState(false), 10000);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b1w5p5t",
        "template_tg42o5c",
        formRef.current!,
        "n5La_mD2UrR0Cv1pd",
      )
      .then(
        () => {
          activateMessage(setformSuccess);
        },
        () => {
          activateMessage(setformError);
        },
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-3 text-white">
      <div className="text-center">
        <h3 className="md:text-4xl text-3xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Send Me a Message. I will answer as soon as possible.
        </p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input type="text" placeholder="Your Name" name="name" required />
            <input
              type="Email"
              placeholder="Your Email Address"
              name="email"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              name="message"
              required
            />
            {formError && (
              <ErrorMessage message="Uupps. There was an error submitting the form. Please get in touch by other way. Thank You! " />
            )}
            {formSuccess && (
              <SuccessMessage message="Great! Form sent successfully. I will contact you as soon as I can. Thank You!" />
            )}
            <button className="btn-primary w-fit" type="submit" value="Send">
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contactInfo.map((contact) => (
              <div
                key={contact.link}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {contact.logo}
                </div>
                <a href={contact.link} target="_blank" rel="noreferrer">
                  <p className="md:text-base text-sm  break-words">
                    {contact.text}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
