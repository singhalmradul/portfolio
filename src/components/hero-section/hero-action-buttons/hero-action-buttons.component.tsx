import { heroButtons, heroButton, heroButtonSecondary } from '../hero-section.css';

interface HeroActionButtonsProps {
  resumeUrl: string;
  onViewWork: () => void;
}

const HeroActionButtons = ({ resumeUrl, onViewWork }: HeroActionButtonsProps) => {
  return (
    <div className={heroButtons}>
      <button onClick={onViewWork} className={heroButton}>
        View My Work
      </button>
      <a href={resumeUrl} className={heroButtonSecondary} download>
        Download Resume
      </a>
    </div>
  );
};

export default HeroActionButtons;
