import Navbar from "./Components/Navbar";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Accomplishments from "./Components/Accomplishments";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/accomplishments" element={<Accomplishments />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectDetails/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
