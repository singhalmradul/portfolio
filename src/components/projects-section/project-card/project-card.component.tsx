import type { Project } from '../../../data/portfolio.types';
import ProjectFeatures from '../project-features/project-features.component';
import ProjectTechnologies from '../project-technologies/project-technologies.component';
import ProjectLinks from '../project-links/project-links.component';
import {
  projectCard,
  projectTitle,
  projectDescription,
  projectLongDescription
} from '../projects-section.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={projectCard}>
      <h3 className={projectTitle}>
        {project.title}
      </h3>
      <p className={project.longDescription ? projectLongDescription : projectDescription}>
        {project.longDescription || project.description}
      </p>

      {project.features && <ProjectFeatures features={project.features} />}

      <ProjectTechnologies technologies={project.technologies} />

      <ProjectLinks githubLink={project.githubLink} />
    </div>
  );
};

export default ProjectCard;
