import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

type MessageFunction = (state: boolean) => void;

const contactInfo = [
  {
    logo: "logo-linkedin",
    text: "/Kevin Butvilofsky",
    link: "https://www.linkedin.com/in/kevin-butvilofsky/",
  },
];

function Contact() {
  const formRef = useRef();
  const [formError, setformError] = useState(false);
  const [formSuccess, setformSuccess] = useState(false);

  const activateMessage = (formState: MessageFunction) => {
    formState(true);
    setTimeout(() => formState(false), 10000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b1w5p5t",
        "template_tg42o5c",
        formRef.current,
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
                  <ion-icon name={contact.logo} />
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
