import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import ContactButton from './contact-button/contact-button.component';
import SectionHeader from '../shared/section-header/section-header.component';
import {
  contactSection,
  contactDescription,
  contactButtons,
  contactButton,
  contactButtonSecondary
} from './contact-section.css';
import './contact-section-global.css';

const ContactSection = () => {
  const { personalInfo } = usePortfolioData();

  return (
    <section id="contact" className={contactSection}>
      <SectionHeader>Get in Touch</SectionHeader>
      <p className={contactDescription}>
        Let's connect! Feel free to reach out via email or LinkedIn.
      </p>
      <div className={contactButtons}>
        <ContactButton
          href={`mailto:${personalInfo.email}`}
          className={contactButton}
        >
          Email Me
        </ContactButton>
        <ContactButton
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={contactButtonSecondary}
        >
          LinkedIn
        </ContactButton>
        <ContactButton
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className={contactButtonSecondary}
        >
          GitHub
        </ContactButton>
      </div>
    </section>
  );
};

export default ContactSection;
