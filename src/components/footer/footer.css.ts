import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const footer = style({
  padding: '2rem 1.5rem',
  textAlign: 'center',
  color: theme.color.text.tertiary,
  borderTop: `1px solid ${theme.color.borderLight}`,
  backgroundColor: theme.color.surface,
  position: 'relative',
  background: `
    linear-gradient(135deg, ${theme.color.surface} 0%, ${theme.color.background} 100%),
    radial-gradient(circle at 50% 0%, ${theme.color.primary}03 0%, transparent 50%)
  `,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60%',
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${theme.color.primary}60, ${theme.color.accent}40, transparent)`,
    filter: 'blur(0.5px)',
  },
  '@media': {
    [mediaQueries.xs]: {
      padding: '1.5rem 1rem',
      fontSize: '0.9rem'
    },
    [mediaQueries.lgUp]: {
      padding: '2.5rem 1.5rem'
    }
  }
});
