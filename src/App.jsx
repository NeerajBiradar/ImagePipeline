import React, { useState } from "react";
import Navbar from "./components/Header";
import Home from "./components/Home";
import ImageCanvas from "./components/ImageCanvas";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<ImageCanvas/>} />
      </Routes>
    </Router>
  );
}

export default App;
