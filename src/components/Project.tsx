import React, { useEffect, useState } from "react";
import "../assets/styles/Project.scss";
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectItem {
  title: string;
  description: string;
  references: string;
}

function Project() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    import('../assets/data/projects.json')
      .then((data) => {
        setProjects(data.default);
      })
      .catch((error) => {
        console.error('Error loading project data:', error);
      });
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h1>Current Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
              <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.references} target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Project;
