import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>

         
                  
                   <Router>
                              <Routes>
                               <Route path='/' element={ <>
                               <Navbar />
                               <Hero />
                               <Projects />
                               <Contact />
                               </>}></Route>
                                <Route path='/projects' element={ <><Navbar /><Projects />
                                </>}></Route>
                                <Route path='/contact' element={ <> <Navbar /><Contact /></>}></Route>
                              </Routes>
                            </Router>
    </>
  );
}

export default App;