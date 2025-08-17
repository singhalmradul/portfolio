import type { Experience } from '../../../data/portfolio.types';
import {
  experienceCard,
  experienceJobTitle,
  experienceDuration,
  experienceList
} from '../experience-section.css';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className={experienceCard}>
      <h3 className={experienceJobTitle}>{experience.title} – {experience.company}</h3>
      <p className={experienceDuration}>{experience.duration}</p>
      <ul className={experienceList}>
        {experience.responsibilities.map((responsibility: string, index: number) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
