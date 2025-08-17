import {
  projectLinks,
  projectGithubLink
} from '../projects-section.css';

interface ProjectLinksProps {
  githubLink?: string;
}

const ProjectLinks = ({ githubLink }: ProjectLinksProps) => {
  if (!githubLink) return null;

  return (
    <div className={projectLinks}>
      <a href={githubLink} className={projectGithubLink}>
        GitHub →
      </a>
    </div>
  );
};

export default ProjectLinks;
