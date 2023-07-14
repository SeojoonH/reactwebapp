import React from "react";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Destinations from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
import ImgCarousel from "./components/carousel/ImgCarousel";
import Footer from "./components/footer/Footer";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/" element={<Destinations />}></Route>
        <Route path="/" element={<Search />}></Route>
        <Route path="/" element={<Selects />}></Route>
        <Route path="/" element={<ImgCarousel />}></Route>
        <Route path="/" element={<Footer />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
