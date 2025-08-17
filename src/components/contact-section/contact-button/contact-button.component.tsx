import React from 'react';

interface ContactButtonProps {
  href: string;
  children: React.ReactNode;
  className: string;
  target?: string;
  rel?: string;
}

const ContactButton = ({ href, children, className, target, rel }: ContactButtonProps) => {
  return (
    <a href={href} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
};

export default ContactButton;
