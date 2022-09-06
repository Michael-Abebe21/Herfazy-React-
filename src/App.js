import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./inc/Header";
import Fantu from "./Fantu";
import Tourism from "./Tourism";
import Risk from "./Risk";
import Governance from "./Governance";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fantu" element={<Fantu />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/risk" element={<Risk />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
