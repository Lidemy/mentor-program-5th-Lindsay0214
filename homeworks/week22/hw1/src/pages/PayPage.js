import React, { useState } from "react";
import Pay from "../components/Pay";
import Sidebar from "../components/Sidebar";
import SubNavbar from "../components/SubNavbar";

const PayPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SubNavbar toggle={toggle} />
      <Pay />
    </>
  );
};

export default PayPage;
