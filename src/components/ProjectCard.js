import React from 'react';

const ProjectCard = ({ title, description, color, visitUrl }) => {
  return (
    <div className="project-card" style={{ backgroundColor: color }}>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {visitUrl ? (
        <a href={visitUrl} className="visit-button" target="_blank" rel="noopener noreferrer">
            VISIT WEBSITE
        </a>
        ) : (
        <p className="website-link-message">Website Link Not Available</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;