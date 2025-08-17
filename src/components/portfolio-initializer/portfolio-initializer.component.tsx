import { useEffect } from 'react';
import { usePortfolioData } from '../../store/portfolio/use-portfolio';

const PortfolioInitializer = () => {
  const { loadPortfolioData, personalInfo, error } = usePortfolioData();

  useEffect(() => {
    // Only load data if we don't have personalInfo (indicating data hasn't been loaded)
    if (!personalInfo.name) {
      loadPortfolioData();
    }
  }, [loadPortfolioData, personalInfo.name]);

  // Log any errors (you could also display them in a toast or error boundary)
  useEffect(() => {
    if (error) {
      console.error('Portfolio data loading error:', error);
    }
  }, [error]);

  return null; // This component doesn't render anything
};

export default PortfolioInitializer;
