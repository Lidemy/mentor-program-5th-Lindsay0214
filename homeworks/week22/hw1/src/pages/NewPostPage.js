import React, { useState } from "react";
import NewPost from "../components/NewPost";
import Sidebar from "../components/Sidebar";
import SubNavbar from "../components/SubNavbar";

const NewPostPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SubNavbar toggle={toggle} />
      <NewPost />
    </>
  );
};

export default NewPostPage;
