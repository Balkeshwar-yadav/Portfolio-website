import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Home = () => {
  return (
     <Router>
            <Routes>
             <Route path='/' element={ <Hero />}></Route>
              <Route path='/projects' element={ <Projects />}></Route>
              <Route path='/contact' element={ <Contact />}></Route>
            </Routes>
          </Router>
  )
}

export default Home