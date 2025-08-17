import { navLink, mobileNavLink } from '../main-navigation.css';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

const NavigationLink = ({ href, children, onClick, variant = 'desktop' }: NavigationLinkProps) => {
  const linkClass = variant === 'mobile' ? mobileNavLink : navLink;

  return (
    <a href={href} className={linkClass} onClick={onClick}>
      {children}
    </a>
  );
};

export default NavigationLink;
