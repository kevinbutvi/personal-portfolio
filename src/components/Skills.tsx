import React from "react";

import logoPython from "../assets/images/logo_python.png";
import logoCss from "../assets/images/logo_css.png";
import logoDjango from "../assets/images/logo_django.png";
import logoHtml from "../assets/images/logo_html.png";
import logoJs from "../assets/images/logo_js.png";
import logoReact from "../assets/images/logo_react.png";
import logoDjangoRest from "../assets/images/logoDjangoRest2.png";
import logoFastApi from "../assets/images/logo_fastApi.png";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      logo: logoHtml,
      level: "Advance",
      percentage: 98,
      size: "md:w-[5rem] w-[3rem]",
    },
    {
      name: "CSS",
      logo: logoCss,
      level: "Advance",
      percentage: 90,
      size: "md:w-[5rem] w-[3rem]",
    },
    {
      name: "React",
      logo: logoReact,
      level: "Intermediate",
      percentage: 70,
      size: "md:w-[5rem] w-[2.75rem]",
    },
    {
      name: "JavaScript",
      logo: logoJs,
      level: "Advance",
      percentage: 85,
      size: "md:w-[4rem] w-[2.5rem]",
    },
    {
      name: "Python",
      logo: logoPython,
      level: "Advance",
      percentage: 98,
      size: "md:w-[4rem] w-[2.75rem]",
    },
    {
      name: "Django",
      logo: logoDjango,
      level: "Advance",
      percentage: 90,
      size: "w-[7rem]",
    },
    {
      name: "Django Rest",
      logo: logoDjangoRest,
      level: "Intermediate",
      percentage: 75,
      size: "md:w-[5rem] w-[3rem]",
    },
    {
      name: "Fast API",
      logo: logoFastApi,
      level: "Intermediate",
      percentage: 75,
      size: "md:w-[5.5rem] w-[3.25rem]",
    },
  ];

  return (
    <section id="skills" className="py-14 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="md:text-4xl text-3xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">About My Knowledge</p>
        <div className="flex items-center justify-center mt-12 md:gap-10 gap-2 flex-wrap md:w-9/12 w-12/12 mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border-2 group border-cyan-600 relative md:w-[14rem] w-[9rem] bg-gray-900 gap-3 md:p-8 p-4 rounded-xl flex flex-col items-center justify-center"
            >
              <h3 className="md:text-xl text:md group-hover:text-cyan-600 group-hover:font-extrabold font-bold">
                {skill.name}
              </h3>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.percentage}%,#ddd ${skill.percentage}%)`,
                }}
                className="md:w-32 md:h-32 w-24 h-24 flex items-center justify-center rounded-full"
              >
                <div className="md:w-28 md:h-28 w-[5.5rem] h-[5.5rem] bg-gray-700 rounded-full flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className={skill.size}
                  />
                </div>
              </div>
              <p className="md:text-xl text-md mt-3"> {skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
