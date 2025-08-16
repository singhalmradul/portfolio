import { style } from '@vanilla-extract/css';

export const filterContainer = style({
  padding: '2rem',
  backgroundColor: 'var(--color-surface)',
  borderRadius: '8px',
  margin: '2rem 0',
});

export const filterTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: 'var(--color-text)',
});

export const filterOptions = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '2rem',
});

export const filterButton = style({
  padding: '0.5rem 1rem',
  border: '1px solid var(--color-border)',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  color: 'var(--color-text)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: 'var(--color-primary-hover)',
    color: 'var(--color-primary-text)',
  },
});

export const filterButtonActive = style([
  filterButton,
  {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-primary-text)',
    borderColor: 'var(--color-primary)',
  },
]);

export const clearFilters = style({
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: 'var(--color-danger)',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold',

  ':hover': {
    backgroundColor: 'var(--color-danger-hover)',
  },
});

export const filteredResults = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const projectItem = style({
  padding: '1rem',
  border: '1px solid var(--color-border)',
  borderRadius: '4px',
  backgroundColor: 'var(--color-background)',
});

export const projectItemTitle = style({
  margin: '0 0 0.5rem 0',
  color: 'var(--color-text)',
});

export const projectItemDescription = style({
  margin: '0 0 0.5rem 0',
  color: 'var(--color-text-secondary)',
});

export const projectItemTechnologies = style({
  fontSize: '0.875rem',
  color: 'var(--color-text-secondary)',
});
