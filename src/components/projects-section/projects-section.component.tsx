import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import type { Project } from '../../data/portfolio.types';
import {
  projectsSection,
  projectsTitle,
  projectsGrid,
  projectCard,
  projectTitle,
  projectDescription,
  projectLongDescription,
  projectFeatures,
  projectFeaturesTitle,
  projectFeaturesList,
  projectFeatureItem,
  projectFeatureBullet,
  projectTech,
  projectTechItem,
  projectLinks,
  projectGithubLink
} from './projects-section.css';

const ProjectsSection = () => {
  const { projects } = usePortfolioData();

  return (
    <section id="projects" className={projectsSection}>
      <h2 className={projectsTitle}>Projects</h2>
      <div className={projectsGrid}>
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className={projectCard}
          >
            <h3 className={projectTitle}>
              {project.title}
            </h3>
            <p className={project.longDescription ? projectLongDescription : projectDescription}>
              {project.longDescription || project.description}
            </p>

            {project.features && (
              <div className={projectFeatures}>
                <h4 className={projectFeaturesTitle}>Key Features:</h4>
                <ul className={projectFeaturesList}>
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className={projectFeatureItem}>
                      <span className={projectFeatureBullet}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={projectTech}>
              {project.technologies.map((tech: string, index: number) => (
                <span key={index} className={projectTechItem}>{tech}</span>
              ))}
            </div>

            {project.githubLink && (
              <div className={projectLinks}>
                <a href={project.githubLink} className={projectGithubLink}>
                  GitHub →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
