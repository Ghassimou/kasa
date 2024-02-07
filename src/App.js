import React from "react";
import "./styles/app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Appartment from "./pages/appartment/Appartment";
import Error from "./pages/error/Error";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appartment/:id" element={<Appartment />} />
      <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
