import SkillCard from '../skill-card/skill-card.component';
import {
  skillsCategory,
  skillsCategoryTitle,
  skillsGrid
} from '../skills-section.css';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className={skillsCategory}>
      <h3 className={skillsCategoryTitle}>{title}</h3>
      <div className={skillsGrid}>
        {skills.map((skill: string) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
