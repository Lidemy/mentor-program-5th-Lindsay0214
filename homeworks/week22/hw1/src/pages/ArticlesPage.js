import React, { useState } from "react";
import Articles from "../components/Articl";
import Sidebar from "../components/Sidebar";
import SubNavbar from "../components/SubNavbar";
import SubFooter from "../components/SubFooter";

const ArticlesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SubNavbar toggle={toggle} />
      <Articles />
      <SubFooter />
    </>
  );
};

export default ArticlesPage;
