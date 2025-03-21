import React from 'react';
import '../Styles/ProjectDetails.css';
import { useParams } from 'react-router-dom';
import ProjectsData from '../Assets/projects.json';

// Import specific icons
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaMicrochip } from 'react-icons/fa';
import { SiMongodb, SiCplusplus, SiArduino} from 'react-icons/si';
import { MdStorage } from 'react-icons/md'; // For LocalStorage
import { FiExternalLink} from "react-icons/fi";

// Map tech names to their respective icons
const techIcons = {
    React: FaReact,
    JavaScript: FaJs,
    NodeJS: FaNodeJs,
    MongoDB: SiMongodb,
    "C++": SiCplusplus,
    CSS: FaCss3Alt,
    Arduino: SiArduino,
    "IoT Sensors": FaMicrochip,
    LocalStorage: MdStorage,
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = ProjectsData[id];

    if (!project) {
        return <h3>Project Not Found</h3>;
    }

    return (
        <div id='projectdetail-div'>
            <h3 id='single-head'>{project.title}</h3>
            <div className='two-section-div'>
                <div className='left-div-project'>
                    <img src={project.image_src} alt='Project Preview' className="responsive-img" />
                </div>
                <div className='right-div-project'>
                    <p className='status'>{project.status}</p>
                    <div className='detailed_description'>
                        {project.detailed_description.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                    <a href={project.project_url} className='demo_button' target="_blank" rel="noopener noreferrer">
                        View Demo <FiExternalLink className='link-icon'/>
                    </a>
                </div>
            </div>
            <div className='single-section-div'>
                <h3 className='group-head'>Key Features</h3>
                <ul>
                    {project.key_features.map((feature, index) => (
                        <li key={index}>
                            <p className='features-list'>{feature}</p>
                        </li>
                    ))}
                </ul>

                <h3 className='group-head'>Tech Stack</h3>
                <div className="tech-stack-icons">
                    {project.tech_stack.map((tech, index) => {
                        const IconComponent = techIcons[tech.name]; 
                        return IconComponent ? (
                            <div className='tech-div' key={index}>
                                <IconComponent title={tech.name} className="tech-icon" />
                                <p className='tech-name'>{tech.name}</p>
                            </div>
                        ) : (
                            <p key={index}>{tech.name}</p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
