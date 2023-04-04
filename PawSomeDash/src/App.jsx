import NavBar from "./components/NavBar";
import ContentSection from "./components/ContentSection";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar activeKey={activeKey} onSelect={setActiveKey} />
        <ContentSection activeKey={activeKey} />
      </div>
    </BrowserRouter>
  );
}

export default App;
