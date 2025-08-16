import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import { useUI } from '../../store/ui/use-ui';
import { selectProjectsByTechnology } from '../../store/portfolio/portfolio.selectors';
import { useSelector } from 'react-redux';
import type { Project } from '../../data/portfolio.types';
import {
  filterContainer,
  filterTitle,
  filterOptions,
  filterButton,
  filterButtonActive,
  filteredResults,
  projectItem,
  projectItemTitle,
  projectItemDescription,
  projectItemTechnologies,
  clearFilters
} from './projects-filter.css';

const ProjectsFilter = () => {
  const { projects } = usePortfolioData();
  const {
    projectTechnologyFilter,
    setProjectTechnologyFilter,
    clearFilters: clearAllFilters
  } = useUI();
  const filteredProjects = useSelector(
    projectTechnologyFilter
      ? selectProjectsByTechnology(projectTechnologyFilter)
      : () => projects
  );

  const handleTechnologyFilter = (technology: string) => {
    if (projectTechnologyFilter === technology) {
      setProjectTechnologyFilter(null);
    } else {
      setProjectTechnologyFilter(technology);
    }
  };

  const handleClearFilters = () => {
    clearAllFilters();
  };

  // Get unique technologies from projects for filtering
  const projectTechnologies = Array.from(
    new Set(projects.flatMap((project: Project) => project.technologies))
  ).sort();

  return (
    <div className={filterContainer}>
      <h3 className={filterTitle}>Filter Projects by Technology</h3>

      <div className={filterOptions}>
        {projectTechnologies.map((tech: string) => (
          <button
            key={tech}
            onClick={() => handleTechnologyFilter(tech)}
            className={
              projectTechnologyFilter === tech
                ? filterButtonActive
                : filterButton
            }
          >
            {tech}
          </button>
        ))}

        {projectTechnologyFilter && (
          <button
            onClick={handleClearFilters}
            className={clearFilters}
          >
            Clear Filters
          </button>
        )}
      </div>

      <div className={filteredResults}>
        {projectTechnologyFilter && (
          <p>
            Showing {filteredProjects.length} project(s) using {projectTechnologyFilter}
          </p>
        )}

        {filteredProjects.map((project: Project) => (
          <div key={project.id} className={projectItem}>
            <h4 className={projectItemTitle}>{project.title}</h4>
            <p className={projectItemDescription}>{project.description}</p>
            <div className={projectItemTechnologies}>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
