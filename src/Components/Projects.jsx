import React from 'react';
import '../Styles/Projects.css';
import { Link } from 'react-router-dom';
import ProjectsData from '../Assets/projects.json';

const Projects = () => {
  return (
    <div id='projects-div'>
      {ProjectsData.map((project, index) => (
        <div key={index} className='project-div'>
          <div className={`project-label ${project.status === 'Completed' ? 'green' : 'red'}`}>{project.status}</div>
          <img src={project.image_src} alt='' className='project-image' />
          <h3 className='project-title'>{project.title}</h3>
          <p className='project-stack'>
            Tech Stack: <span>{project.tech_stack.map((tech) => tech.name).join(', ')}</span>
          </p>
          <p className='project-description'>{project.short_description}</p>
          <Link to={`/projects/${index}`} className='project-button'>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;