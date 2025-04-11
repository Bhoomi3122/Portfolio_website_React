import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Particles from './components/Particles';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Accomplishments from "./components/Accomplishments";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-x-hidden">
        <Particles />
        <div className="relative z-10">
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path='/accomplishments' element={<Accomplishments/>}/>
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
);

}

export default App
