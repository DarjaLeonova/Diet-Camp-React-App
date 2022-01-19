import React from "react";
import 'bootswatch/dist/lux/bootstrap.min.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"
import Home from "./components/pages/Home";
import Diets from "./components/pages/Diets";
import Pricing from "./components/pages/Pricing";
import SignUp from "./components/pages/SignUp";
import About from "./components/pages/About";




function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/diets" element={<Diets />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
