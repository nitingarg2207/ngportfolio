import React from "react";
import "./App.css";
import "./styles/Home.css";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
