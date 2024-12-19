import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Python",
    "Django",
    "FastApi",
    "PHP",
    "C++",
    "C",
    "Java"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Linux",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "GraphQL"
];

const labelsThird = [
    "OpenAI",
    "Hugging Face",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "SciPy",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Software</h3>
                    <p>Specializing in designing RESTful APIs, optimizing database management, and ensuring scalable, secure backend solutions throughout the SDLC process.</p>
                    <div className="flex-chips">
                    <p>Tech stack:</p>
                        <span className="chip-title"></span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & Data</h3>
                    <p>Experienced in working with AWS for deploying and managing scalable applications. Proficient in MySQL and MongoDB, handling both relational and NoSQL databases, including schema design, optimization, and managing large datasets.</p>
                    <div className="flex-chips">
                    <p>Tech stack:</p>
                        <span className="chip-title"></span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>ML & Data</h3>
                    <p>Skilled in developing and deploying machine learning models with PyTorch and Scikit-learn. Expertise in data analysis using Pandas and NumPy, along with strong capabilities in data preprocessing, model training, and optimization for both structured and unstructured data.</p>
                    <div className="flex-chips">
                        <p>Tech stack:</p>
                        <span className="chip-title"></span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;