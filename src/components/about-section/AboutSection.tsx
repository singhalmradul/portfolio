import { personalInfo } from '../../data/portfolio.data';
import { aboutSection, aboutTitle, aboutText } from './about.css';

const AboutSection = () => {
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
