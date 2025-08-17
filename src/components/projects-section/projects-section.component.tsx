import { forwardRef } from 'react';
import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import type { Project } from '../../data/portfolio.types';
import ProjectCard from './project-card/project-card.component';
import SectionHeader from '../shared/section-header/section-header.component';
import {
  projectsSection,
  projectsGrid
} from './projects-section.css';

const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  const { projects } = usePortfolioData();

  return (
    <section ref={ref} id="projects" className={projectsSection}>
      <SectionHeader>Projects</SectionHeader>
      <div className={projectsGrid}>
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
