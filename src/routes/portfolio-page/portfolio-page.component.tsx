import { useRef } from 'react';
import HeroSection from '../../components/hero-section/hero-section.component';
import AboutSection from '../../components/about-section/about-section.component';
import ExperienceSection from '../../components/experience-section/experience-section.component';
import ProjectsSection from '../../components/projects-section/projects-section.component';
import SkillsSection from '../../components/skills-section/skills-section.component';
import BlogSection from '../../components/blog-section/blog-section.component';
import ContactSection from '../../components/contact-section/contact-section.component';
import Footer from '../../components/footer/footer.component';
import MainNavigation from '../../components/main-navigation/main-navigation.component';
import { portfolioContainer } from './portfolio-page.css';

const PortfolioPage = () => {
  const projectsRef = useRef<HTMLElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={portfolioContainer}>
      <MainNavigation />
      <HeroSection onScrollToProjects={scrollToProjects} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection ref={projectsRef} />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
