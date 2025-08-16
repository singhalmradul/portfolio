import { personalInfo } from '../../data/portfolio.data';
import { footer } from './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footer}>
      © {currentYear} {personalInfo.name}. All rights reserved.
    </footer>
  );
};

export default Footer;
