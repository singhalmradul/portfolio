import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import SectionHeader from '../shared/section-header/section-header.component';
import { aboutSection, aboutText } from './about-section.css';

const AboutSection = () => {
  const { personalInfo } = usePortfolioData();

  return (
    <section id="about" className={aboutSection}>
      <SectionHeader>About Me</SectionHeader>
      <p className={aboutText}>
        {personalInfo.about}
      </p>
    </section>
  );
};

export default AboutSection;
