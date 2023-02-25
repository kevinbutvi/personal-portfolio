import react, { useState, useEffect } from "react";

import AboutMe from "./components/AboutMe";
import ContactBubble from "./components/ContactBubble";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HireMe from "./components/HireMe";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <HireMe />
      <Project />
      <Contact />
      <Footer />
      <ContactBubble />
    </>
  );
}

export default App;
