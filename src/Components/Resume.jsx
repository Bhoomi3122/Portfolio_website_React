import React from 'react'
import { FiExternalLink, FiDownload } from "react-icons/fi";
import '../Styles/Resume.css';
const Resume = () => {
  const handleDownload = async () => {
    const response = await fetch('/Resume_Bhoomi.pdf');  // Fetch file
    const blob = await response.blob();  // Convert to binary
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Bhoomi_Garg_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="outer-div">
      <h2>Resume</h2>
      <div id="online-div">
      <a href="https://drive.google.com/file/d/1dgpbINwDYerNSLDN_Bs5OHebP892K5ep/view?usp=sharing" target='_blank' rel='noopener noreferrer'><FiExternalLink className='icon'/>View Resume Online</a>
      </div>
      <div id="download-div">
      <button onClick={handleDownload}><FiDownload className='icon'/>Download Resume</button>
      </div>
    </div>
  )
}

export default Resume
