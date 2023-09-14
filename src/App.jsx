import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
