import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import {
  contactSection,
  contactTitle,
  contactDescription,
  contactButtons,
  contactButton,
  contactButtonSecondary
} from './contact-section.css';

const ContactSection = () => {
  const { personalInfo } = usePortfolioData();

  return (
    <section id="contact" className={contactSection}>
      <h2 className={contactTitle}>Get in Touch</h2>
      <p className={contactDescription}>
        Let's connect! Feel free to reach out via email or LinkedIn.
      </p>
      <div className={contactButtons}>
        <a href={`mailto:${personalInfo.email}`} className={contactButton}>
          Email Me
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={contactButtonSecondary}>
          LinkedIn
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={contactButtonSecondary}>
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
