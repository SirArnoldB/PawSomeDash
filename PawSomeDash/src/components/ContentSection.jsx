import React from "react";
import Home from "../routes/Home";
import Organizations from "../routes/Organizations";
import About from "../routes/About";
import PetsDash from "../routes/PetsDash";
import PetDetails from "../routes/PetDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ContentSection = ({ activeKey }) => {
  return (
    <div className="page-container rs-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets">
          <Route index element={<PetsDash />} />
          <Route path=":petId" element={<PetDetails />} />
        </Route>
        {/* <Route path="/organizations" element={<Organizations />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default ContentSection;
