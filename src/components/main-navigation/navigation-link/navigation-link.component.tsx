import { navLink } from '../main-navigation.css';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavigationLink = ({ href, children }: NavigationLinkProps) => {
  return (
    <a href={href} className={navLink}>
      {children}
    </a>
  );
};

export default NavigationLink;
