import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import { footer } from './footer.css';

const Footer = () => {
  const { personalInfo } = usePortfolioData();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footer}>
      © {currentYear} {personalInfo.name}. All rights reserved.
    </footer>
  );
};

export default Footer;
