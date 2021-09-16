import React, { useState } from "react";
import Comments from "../components/Comments";
import Sidebar from "../components/Sidebar";
import SubNavbar from "../components/SubNavbar";

const CommentsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SubNavbar toggle={toggle} />
      <Comments />
    </>
  );
};

export default CommentsPage;
