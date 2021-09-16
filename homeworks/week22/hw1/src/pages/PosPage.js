import React, { useState } from "react";
import Pos from "../components/Pos";
import Sidebar from "../components/Sidebar";
import SubNavbar from "../components/SubNavbar";
import SubFooter from "../components/SubFooter";

const PosPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SubNavbar toggle={toggle} />
      <Pos />
      <SubFooter />
    </>
  );
};

export default PosPage;
