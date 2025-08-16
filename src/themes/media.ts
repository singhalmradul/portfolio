// Media query helpers for responsive design
export const breakpoints = {
  xs: '320px',     // Small mobile
  sm: '480px',     // Large mobile
  md: '768px',     // Tablet
  lg: '1024px',    // Small desktop
  xl: '1280px',    // Large desktop
  '2xl': '1536px', // Extra large desktop
} as const;

export const mediaQueries = {
  // Max-width queries (mobile-first approach)
  xs: `(max-width: ${breakpoints.sm})`,
  sm: `(max-width: ${breakpoints.md})`,
  md: `(max-width: ${breakpoints.lg})`,
  lg: `(max-width: ${breakpoints.xl})`,
  xl: `(max-width: ${breakpoints['2xl']})`,

  // Min-width queries
  smUp: `(min-width: ${breakpoints.sm})`,
  mdUp: `(min-width: ${breakpoints.md})`,
  lgUp: `(min-width: ${breakpoints.lg})`,
  xlUp: `(min-width: ${breakpoints.xl})`,
  '2xlUp': `(min-width: ${breakpoints['2xl']})`,

  // Range queries
  smOnly: `(min-width: ${breakpoints.sm}) and (max-width: calc(${breakpoints.md} - 1px))`,
  mdOnly: `(min-width: ${breakpoints.md}) and (max-width: calc(${breakpoints.lg} - 1px))`,
  lgOnly: `(min-width: ${breakpoints.lg}) and (max-width: calc(${breakpoints.xl} - 1px))`,

  // Legacy support
  mobile: `(max-width: ${breakpoints.md})`,
  tablet: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  desktop: `(min-width: ${breakpoints.lg})`,
} as const;
