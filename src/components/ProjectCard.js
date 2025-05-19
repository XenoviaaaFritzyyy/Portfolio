import React, { forwardRef } from 'react';

const ProjectCard = forwardRef(({ title, description, color, visitUrl, visible, ...rest }, ref) => {
  return (
    <div
      className={`project-card${visible ? ' visible' : ''}`}
      style={{ backgroundColor: color }}
      ref={ref}
      {...rest}
    >
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
});

export default ProjectCard;