import React from "react";

import aboutImg from "../assets/gifs/dev_gif2.gif";

function AboutMe() {
  const information = [
    { text: "Years Experience", count: "01" },
    { text: "Completed Projects", count: "03" },
    { text: "Companies Work", count: "02" },
  ];
  return (
    <section id="aboutMe" className="py-14 text-white">
      <div className="text-center my-8">
        <h3 className="md:text-4xl text-3xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I’m a technology enthusiast, I love challenges, so I’m training
                myself every day to increase my knowledge.
                <br />
                I consider myself a very capable person, with an open mind and
                agile to learn new things and give solutions to problems. I can
                perform in various areas of my competence without any problem,
                individually or in work groups. <br />I have experience in
                <span className="text-cyan-300 font-bold"> Python</span>,{" "}
                <span className="text-cyan-300 font-bold"> Django</span> and{" "}
                <span className="text-cyan-300 font-bold"> FastAPI</span> in
                Back-End,{" "}
                <span className="text-cyan-300 font-bold"> JavaScript</span> and{" "}
                <span className="text-cyan-300 font-bold"> React</span> in the
                Front-End side, and working with Agile Frameworks like
                <span className="text-cyan-300 font-bold"> Scrum</span>.
              </p>
              <div className="flex mt-10 items-center gap-7 ">
                {information.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-sm">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="https://drive.google.com/drive/folders/1FDDW-GqdTGUdBvufwqUK3ihOajWEg-bK?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="btn-primary">
                  Download my Resume
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="md:w-96 h-full relative sm:w-10/12 w-10/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt="About"
                className="md:w-full w-56 object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
