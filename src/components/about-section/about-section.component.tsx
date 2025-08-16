import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import { aboutSection, aboutTitle, aboutText } from './about-section.css';

const AboutSection = () => {
  const { personalInfo } = usePortfolioData();

  return (
    <section id="about" className={aboutSection}>
      <h2 className={aboutTitle}>About Me</h2>
      <p className={aboutText}>
        {personalInfo.about}
      </p>
    </section>
  );
};

export default AboutSection;
