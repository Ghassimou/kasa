import React from "react";
import "./styles/app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Sheetaccommodation from "./pages/sheetAccommodation/Sheetaccommodation";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sheetaccommodation" element={<Sheetaccommodation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
