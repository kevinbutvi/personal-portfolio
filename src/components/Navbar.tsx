/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const menuLinks = [
    { name: "Home", link: "#home", logo: "home" },
    { name: "About", link: "#aboutMe", logo: "information-circle" },
    { name: "Skills", link: "#skills", logo: "flash" },
    { name: "Pick Me", link: "#hireme", logo: "person-add" },
    { name: "My Work", link: "#projects", logo: "folder-open" },
    { name: "Contact Me", link: "#contact", logo: "chatbubbles" },
  ];

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/90 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between ">
        <div className="mx-7">
          <a href="#home">
            <h4 className="text-4xl font-bold">
              K<span className="text-cyan-600">EVI</span>N
            </h4>
          </a>
        </div>
        <div
          className={`${
            sticky ? "md:bg-white/0" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((menu) => (
              <li key={menu.name} className="px-6 hover:text-cyan-600">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="z-[999]  text-3xl md:hidden m-5"
        >
          <div className={`${sticky ? "text-cyan-600" : "text-white"} `}>
            {menuOpen ? (
              <ion-icon name="grid-outline" />
            ) : (
              <ion-icon name="grid" />
            )}
          </div>
        </div>
        <div
          className={`md-hidden text-gray-200 absolute w-2/3 h-screen px-7 py-2 font-medium  bg-black top-0 duration-500 ${
            menuOpen ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu) => (
              <li
                onClick={() => setMenuOpen(false)}
                key={menu.name}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu.link}>
                  <ion-icon name={menu.logo} /> {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
