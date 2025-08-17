import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import HeroActionButtons from './hero-action-buttons/hero-action-buttons.component';
import { heroSection, heroTitle, heroDescription } from './hero-section.css';

interface HeroSectionProps {
  onScrollToProjects?: () => void;
}

const HeroSection = ({ onScrollToProjects }: HeroSectionProps) => {
  const { personalInfo } = usePortfolioData();

  const scrollToProjects = () => {
    onScrollToProjects?.();
  };

  return (
    <section className={heroSection}>
      <h1 className={heroTitle}>Hi, I'm {personalInfo.name}</h1>
      <p className={heroDescription}>
        {personalInfo.description}
      </p>
      <HeroActionButtons
        resumeUrl={personalInfo.resumeUrl}
        onViewWork={scrollToProjects}
      />
    </section>
  );
};

export default HeroSection;
