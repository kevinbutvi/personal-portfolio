import React from "react";

import hireMe from "../assets/images/pickme.jpg";

function HireMe() {
  return (
    <section id="hireme" className="py-24 px-3 text-white">
      <div className="text-center">
        <h3 className="md:text-4xl text-3xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg mb-5">
          Do you have an open position?
        </p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 md:max-w-4xl mx-auto min-h-[24rem] md:mt-24 mt-2 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <div className="md:text-2xl text-xl font-semibold">
            <h2 className="my-3">I am a Professional Ready to Work</h2>
            <h2>
              <span className="text-cyan-600">Why You Should Hire Me... </span>
            </h2>
          </div>
          <p className="lg:text-left text-justify max-w-lg text-md mt-4 pr-5 text-gray-200 leading-6">
            Because in the personal aspect, I am a very honest, an respectful
            person and kind every time. I can handle stress situations and I
            have a very good relationship with people. <br />
            About the proffesional aspect, I am self-organized and a very
            commited person. <br />I love challenges, learn new things
            everydays, I can adapt easily to a new work environments and give
            solutions to problems.
          </p>
          <a href="#contact">
            <button type="button" className="btn-primary mt-10">
              <p className="text-md">Do you want to ask me something?</p>
            </button>
          </a>
        </div>
        <img
          src={hireMe}
          alt="hireme"
          className="md:h-[20rem] h-48 lg:absolute bottom-5 right-5 rounded-lg"
        />
      </div>
    </section>
  );
}

export default HireMe;
