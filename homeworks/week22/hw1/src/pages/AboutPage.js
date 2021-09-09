import React, { useState } from "react";
import About from "../components/About";
import Sidebar from "../components/Sidebar";
import SubNavbar from "../components/SubNavbar";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SubNavbar toggle={toggle} />
      <About />
    </>
  );
};

export default AboutPage;
