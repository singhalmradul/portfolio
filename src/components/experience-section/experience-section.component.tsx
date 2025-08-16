import { experience } from '../../data/portfolio.data';
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
  return (
    <section id="experience" className={experienceSection}>
      <h2 className={experienceTitle}>Experience</h2>
      <div className={experienceContainer}>
        {experience.map((job) => (
          <div key={job.id} className={experienceCard}>
            <h3 className={experienceJobTitle}>{job.title} &dash; {job.company}</h3>
            <p className={experienceDuration}>{job.duration}</p>
            <ul className={experienceList}>
              {job.responsibilities.map((responsibility, index) => (
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
