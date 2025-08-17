// Global styles for hover effects
import { globalStyle } from '@vanilla-extract/css';
import { contactButton, contactButtonSecondary } from './contact-section.css';

globalStyle(`${contactButton}:hover::before`, {
  left: 0,
});

globalStyle(`${contactButtonSecondary}:hover::before`, {
  width: '300px',
  height: '300px',
});
