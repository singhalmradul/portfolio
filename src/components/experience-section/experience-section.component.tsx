import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import type { Experience } from '../../data/portfolio.types';
import {
  experienceSection,
  experienceTitle,
  experienceContainer,
  experienceCard,
  experienceJobTitle,
  experienceDuration,
  experienceList
} from './experience-section.css';

const ExperienceSection = () => {
  const { experience } = usePortfolioData();

  return (
    <section id="experience" className={experienceSection}>
      <h2 className={experienceTitle}>Experience</h2>
      <div className={experienceContainer}>
        {experience.map((job: Experience) => (
          <div key={job.id} className={experienceCard}>
            <h3 className={experienceJobTitle}>{job.title} – {job.company}</h3>
            <p className={experienceDuration}>{job.duration}</p>
            <ul className={experienceList}>
              {job.responsibilities.map((responsibility: string, index: number) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
