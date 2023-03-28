import React from "react";
import Home from "../pages/Home";
import Pets from "../pages/Pets";
import Organizations from "../pages/Organizations";
import About from "../pages/About";

const ContentSection = ({ activeKey }) => {
  return (
    <div className="page-container rs-container">
      {activeKey === "1" && <Home />}
      {activeKey === "2-1" && <Pets />}
      {activeKey === "2-2" && <Organizations />}
      {activeKey === "3" && <About />}
    </div>
  );
};

export default ContentSection;
