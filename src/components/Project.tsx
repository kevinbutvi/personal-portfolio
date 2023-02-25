import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/scrollbar";

import workBlog from "../assets/images/workBlog.png";
import workFireBase from "../assets/images/workFireBase.png";
import workMarket from "../assets/images/workMarket.png";
import workScrap from "../assets/images/workScrap.png";

function Project() {
  const myWorkData = [
    {
      title: "Django/DjangoREST Market",
      img: workMarket,
      description:
        "Market build with Django. CRUD of Products and Users, Sales Management, Sales and Suppliers Reports in PDF, Cash closing and Supplier reports, Payments to Suppliers and Sales Summary",
      link: "https://github.com/kevinbutvi/Market",
    },
    {
      title: "Python Web Scraper",
      img: workScrap,
      description: "Extensible Web Scraper Model for any application",
      link: "https://github.com/kevinbutvi/ScrapCotizacionDolar",
    },
    {
      title: "Django News Blog",
      img: workBlog,
      description:
        "News blog. Have a User Registration and User Verification via Mail, Inquiry Form, Subscription to the Newsletter. The User can mark news as favorites and search by Categories and Coincidences",
      link: "https://github.com/kevinbutvi/Proyecto4-Blog",
    },
    {
      title: "Google FireBase Authentication with DjangoREST",
      img: workFireBase,
      description:
        "Django BASE service project with User Authentication with Google by FireBase. You can create and Authenticate Users through Google and manage them with Django's Own Token",
      link: "https://github.com/kevinbutvi/Autenticacion_Google_FireBase",
    },
  ];

  return (
    <section id="projects" className="py-14 text-white">
      <div className="mt-8 text-center">
        <h3 className="md:text-4xl text-3xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Some of my Work</p>
      </div>
      <br />
      <div className="flex max-w-5xl gap-6 px-5 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={30}
            loop
            autoplay={{
              delay: 3000,
            }}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, Scrollbar]}
          >
            {myWorkData.map((project_info) => (
              <SwiperSlide key={project_info.title}>
                <div className="md:h-[20rem] h-[27rem] w-full px-4 bg-slate-700 rounded-xl flex flex-col items-center justify-center">
                  <img
                    src={project_info.img}
                    alt={project_info.title}
                    className="rounded-lg h-[6rem] mx-auto"
                  />
                  <h3 className="text-md font-bold my-8">
                    {project_info.title}
                  </h3>
                  <p className="text-sm">{project_info.description}</p>
                  <div className="mt-7 align-bottom">
                    <a
                      href={project_info.link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-3 py-1"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <div className="my-5 flex items-center justify-center">
        <a href="#">
          <button className="btn-primary w-fit">See All the Projects</button>
        </a>
      </div> */}
    </section>
  );
}

export default Project;
