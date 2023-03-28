import NavBar from "./components/NavBar";
import ContentSection from "./components/ContentSection";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div className="App">
      <NavBar activeKey={activeKey} onSelect={setActiveKey} />
      <ContentSection activeKey={activeKey} />
    </div>
  );
}

export default App;
