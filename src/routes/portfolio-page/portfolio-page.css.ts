import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';
import { mediaQueries } from '../../themes/media';

export const portfolioContainer = style({
  minHeight: '100vh',
  backgroundColor: theme.color.background,
  color: theme.color.text.primary,
  paddingTop: '4rem', // Account for fixed navigation
  '@media': {
    [mediaQueries.sm]: {
      paddingTop: '6rem' // More space when nav stacks on mobile
    }
  }
});
