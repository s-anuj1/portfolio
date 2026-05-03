import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/portfolio/Header";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Experience from "./components/portfolio/Experience";
import Projects from "./components/portfolio/Projects";
import Skills from "./components/portfolio/Skills";
import Leadership from "./components/portfolio/Leadership";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100 antialiased selection:bg-amber-400/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
