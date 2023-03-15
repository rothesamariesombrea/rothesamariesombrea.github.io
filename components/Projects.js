import ProjectCard from "./ProjectCard";
import data from "../data/projects.json";

export default function Projects() {
  return (
    <section className="projects container" id="projects">
      <h2 className="projects--title text-center mb-2">Projects</h2>
      <div className="projects__list">
        {data.projects.map((project) => (
          <ProjectCard
            key={project.id.toString()}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
          />
        ))}
      </div>
    </section>
  );
}
