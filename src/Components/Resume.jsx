import React from 'react'
import { FiExternalLink, FiDownload } from "react-icons/fi";
import '../Styles/Resume.css';
const Resume = () => {
  const handleDownload = async () => {
    const response = await fetch('/Bhoomi_Garg_Resume_File.pdf', { cache: 'no-store' });  // Fetch file
    const blob = await response.blob();  // Convert to binary
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Bhoomi_Garg_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };
  return (
    <div id="outer-div">
      <h2>Resume</h2>
      <div id="online-div">
      <a href="https://drive.google.com/file/d/1kdasF2EMpWTzMTf5AG04L0peifENVxLN/view?usp=sharing" target='_blank' rel='noopener noreferrer'><FiExternalLink className='icon'/>View Resume Online</a>
      </div>
      {/* <div id="download-div">
      <button onClick={handleDownload}><FiDownload className='icon'/>Download Resume</button>
      </div> */}
    </div>
  )
}

export default Resume
