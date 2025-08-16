import { style } from '@vanilla-extract/css';
import { theme } from '../../themes/theme.css';

export const modal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1001,
  padding: '1rem'
});

export const modalContent = style({
  backgroundColor: theme.color.background,
  borderRadius: '1rem',
  padding: '1.5rem',
  maxWidth: '600px',
  width: '100%',
  maxHeight: '80vh',
  overflow: 'hidden',
  position: 'relative',
  border: `1px solid ${theme.color.border}`,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column'
});

export const modalClose = style({
  position: 'sticky',
  top: '0',
  right: '0',
  alignSelf: 'flex-end',
  backgroundColor: theme.color.background,
  border: `1px solid ${theme.color.border}`,
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: theme.color.text.secondary,
  padding: '0.5rem',
  borderRadius: '0.25rem',
  marginBottom: '1rem',
  zIndex: 10,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  ':hover': {
    backgroundColor: theme.color.surface,
    color: theme.color.text.primary
  }
});

export const modalTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: theme.color.text.primary,
  marginBottom: '1rem'
});

export const modalScrollContent = style({
  flex: 1,
  overflowY: 'auto',
  paddingRight: '0.5rem' // Space for scrollbar
});

export const modalText = style({
  fontSize: '0.875rem',
  lineHeight: 1.6,
  color: theme.color.text.secondary,
  marginBottom: '1rem'
});

export const modalList = style({
  listStyle: 'none',
  padding: 0,
  margin: '0 0 1.5rem 0'
});

export const modalListItem = style({
  fontSize: '0.875rem',
  lineHeight: 1.5,
  color: theme.color.text.secondary,
  marginBottom: '0.5rem',
  paddingLeft: '0.5rem'
});

export const modalFooter = style({
  fontSize: '0.875rem',
  lineHeight: 1.6,
  color: theme.color.text.secondary,
  fontStyle: 'italic',
  textAlign: 'center',
  marginTop: '1rem'
});
