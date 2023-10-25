"use client";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {


  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // scroll to top every time the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Navbar  toggle={toggleSidebar} />
    </>
  );
};

export default Navigation;
