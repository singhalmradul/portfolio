import { sectionHeader } from './section-header.css';

interface SectionHeaderProps {
  children: React.ReactNode;
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <h2 className={sectionHeader}>
      {children}
    </h2>
  );
};

export default SectionHeader;
