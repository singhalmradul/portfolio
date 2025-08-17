import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import type { Experience } from '../../data/portfolio.types';
import ExperienceCard from './experience-card/experience-card.component';
import SectionHeader from '../shared/section-header/section-header.component';
import {
  experienceSection,
  experienceContainer
} from './experience-section.css';

const ExperienceSection = () => {
  const { experience } = usePortfolioData();

  return (
    <section id="experience" className={experienceSection}>
      <SectionHeader>Experience</SectionHeader>
      <div className={experienceContainer}>
        {experience.map((job: Experience, index: number) => (
          <ExperienceCard key={`${job.company}-${index}`} experience={job} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
