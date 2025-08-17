import { skillCard } from '../skills-section.css';

interface SkillCardProps {
  skill: string;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className={skillCard}>
      {skill}
    </div>
  );
};

export default SkillCard;
