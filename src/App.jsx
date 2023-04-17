import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/header.css";
import "./styles/contact.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/about.css";
import "./App.css";
import "./styles/projects.css";
import "./styles/skills.css";
import "./styles/experience.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
