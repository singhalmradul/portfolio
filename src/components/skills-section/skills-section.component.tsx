import { skills } from '../../data/portfolio.data';
import {
  skillsSection,
  skillsTitle,
  skillsContainer,
  skillsCategory,
  skillsCategoryTitle,
  skillsGrid,
  skillCard
} from './skills-section.css';

const SkillsSection = () => {
  const skillCategories = [
    { title: 'Backend', skills: skills.backend },
    { title: 'Cloud & DevOps', skills: skills.cloud },
    { title: 'Frontend', skills: skills.frontend },
    { title: 'Databases', skills: skills.databases },
    { title: 'Other', skills: skills.other }
  ];

  return (
    <section id="skills" className={skillsSection}>
      <h2 className={skillsTitle}>Skills</h2>
      <div className={skillsContainer}>
        {skillCategories.map((category) => (
          <div key={category.title} className={skillsCategory}>
            <h3 className={skillsCategoryTitle}>{category.title}</h3>
            <div className={skillsGrid}>
              {category.skills.map((skill) => (
                <div key={skill} className={skillCard}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
