import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import SkillCategory from './skill-category/skill-category.component';
import SectionHeader from '../shared/section-header/section-header.component';
import {
  skillsSection,
  skillsContainer
} from './skills-section.css';

const SkillsSection = () => {
  const { skills } = usePortfolioData();

  return (
    <section id="skills" className={skillsSection}>
      <SectionHeader>Skills</SectionHeader>
      <div className={skillsContainer}>
        {skills.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.values}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
