import { useEffect } from "react";
import '../Styles/Footer.css'
const Footer = () => {
  useEffect(() => {
    // Update the year dynamically
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white p-4 text-center" id="footer-section">
      <p>© <span id="year"></span> Bhoomi Garg. All Rights Reserved.</p>
      <p>Contact: <a href="mailto:gargbhoomi01@gmail.com" className="underline">gargbhoomi01@gmail.com</a></p>
      <button 
        onClick={scrollToTop} 
        id="footer-btn"
    
      >
        Back to Top ↑
      </button>
    </footer>
  );
};

export default Footer;
