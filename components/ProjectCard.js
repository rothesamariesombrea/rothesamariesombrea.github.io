import React from "react";

const ProjectCard = ({
  title,
  technologies,
  description,
  link,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className="projects__list__item hover-grow-2">
      <img src={imgSrc} className="projects__list__item--image" alt={imgAlt} />
      <div className="projects__list__item--content projects__list__item--overlay">
        <h4 className="projects__list__item--title">{title}</h4>
        <p className="projects__list__item--sub-heading">{technologies}</p>
        <p className="projects__list__item--description">{description}</p>
        <a href={link} className="btn btn--sm">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
