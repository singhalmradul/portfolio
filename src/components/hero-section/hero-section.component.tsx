import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import { heroSection, heroTitle, heroDescription, heroButtons, heroButton, heroButtonSecondary } from './hero-section.css';

const HeroSection = () => {
  const { personalInfo } = usePortfolioData();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={heroSection}>
      <h1 className={heroTitle}>Hi, I'm {personalInfo.name}</h1>
      <p className={heroDescription}>
        {personalInfo.description}
      </p>
      <div className={heroButtons}>
        <button onClick={scrollToProjects} className={heroButton}>
          View My Work
        </button>
        <a href={personalInfo.resumeUrl} className={heroButtonSecondary} download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
