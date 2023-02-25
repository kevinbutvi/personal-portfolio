import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

import dev_gif from "../assets/gifs/dev_gif.gif";

function Home() {
  const socialMedia = [
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/kevin-butvilofsky/",
    },
    { logo: "logo-github", link: "https://github.com/kevinbutvi" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-14 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex flex-items justify-center my-10">
        <img
          src={dev_gif}
          alt="profile"
          className="md:w-9/12 md:h-[24rem] h-[12rem] my-auto object-cover rounded-3xl"
        />
      </div>
      <div className="w-11/12 flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-xl md:leading-normal leading-8 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-2xl">
              Hi!
              <br />
            </span>
            <TypeWriterEffect
              text="My name is Kevin Butvilofsky"
              startDelay={1000}
              cursorColor="white"
              typeSpeed={80}
            />
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            <TypeWriterEffect
              text="I'm a really apasionate Fullstack Developer."
              startDelay={3500}
              cursorColor="white"
              typeSpeed={80}
            />
          </h4>
          <a href="#aboutMe">
            <button type="button" className="btn-primary md:m-4 m-8">
              Let me show You more...
            </button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMedia.map((media) => (
              <a href={media.link} key={media.logo}>
                <div className="text-gray-600 hover:text-white cursor-pointer">
                  <ion-icon icon={media.logo} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
