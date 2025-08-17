import {
  projectTech,
  projectTechItem
} from '../projects-section.css';

interface ProjectTechnologiesProps {
  technologies: string[];
}

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className={projectTech}>
      {technologies.map((tech: string, index: number) => (
        <span key={index} className={projectTechItem}>{tech}</span>
      ))}
    </div>
  );
};

export default ProjectTechnologies;
