import React, { useState } from "react";
import ImageCanvas from "./components/ImageCanvas";
import MaskCanvas from "./components/MaskCanvas";
import Navbar from "./components/Header";
import Home from "./components/Home";
import Edit from "./components/Edit"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<Edit/>} />
      </Routes>
    </Router>
  );
}

export default App;
