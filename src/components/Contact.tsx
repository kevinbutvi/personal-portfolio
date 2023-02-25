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
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
          clipRule="evenodd"
        />
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
