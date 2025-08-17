import { keyframes, globalStyle } from '@vanilla-extract/css';
import { theme } from './theme.css';

// Keyframe animations
export const fadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(30px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const fadeInLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-30px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

export const fadeInRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(30px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

export const scaleIn = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
});

export const float = keyframes({
  '0%, 100%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-10px)',
  },
});

export const pulse = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.5,
  },
});

export const shimmer = keyframes({
  '0%': {
    backgroundPosition: '-200% 0',
  },
  '100%': {
    backgroundPosition: '200% 0',
  },
});

export const glow = keyframes({
  '0%, 100%': {
    boxShadow: `0 0 20px ${theme.color.primary}33`,
  },
  '50%': {
    boxShadow: `0 0 30px ${theme.color.primary}66, 0 0 40px ${theme.color.primary}44`,
  },
});

// Global animation utilities
globalStyle('.animate-fade-in-up', {
  animation: `${fadeInUp} ${theme.animation.duration.slow} ${theme.animation.easing.easeOut} forwards`,
});

globalStyle('.animate-fade-in-left', {
  animation: `${fadeInLeft} ${theme.animation.duration.slow} ${theme.animation.easing.easeOut} forwards`,
});

globalStyle('.animate-fade-in-right', {
  animation: `${fadeInRight} ${theme.animation.duration.slow} ${theme.animation.easing.easeOut} forwards`,
});

globalStyle('.animate-scale-in', {
  animation: `${scaleIn} ${theme.animation.duration.normal} ${theme.animation.easing.bounce} forwards`,
});

globalStyle('.animate-float', {
  animation: `${float} 3s ${theme.animation.easing.easeInOut} infinite`,
});

globalStyle('.animate-pulse', {
  animation: `${pulse} 2s ${theme.animation.easing.easeInOut} infinite`,
});

globalStyle('.animate-glow', {
  animation: `${glow} 2s ${theme.animation.easing.easeInOut} infinite`,
});

// Section header animation
globalStyle('.section-header', {
  opacity: 0,
  animation: `${fadeInUp} ${theme.animation.duration.slow} ${theme.animation.easing.easeOut} 0.2s forwards`,
});

// Glass morphism utility
globalStyle('.glass', {
  background: theme.color.glass,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: `1px solid ${theme.color.borderLight}`,
});

// Hover effects
globalStyle('.hover-lift', {
  transition: `transform ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
});

globalStyle('.hover-lift:hover', {
  transform: 'translateY(-5px)',
});

globalStyle('.hover-glow', {
  transition: `box-shadow ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
});

globalStyle('.hover-glow:hover', {
  boxShadow: theme.shadow.glow,
});

globalStyle('.hover-scale', {
  transition: `transform ${theme.animation.duration.normal} ${theme.animation.easing.easeOut}`,
});

globalStyle('.hover-scale:hover', {
  transform: 'scale(1.05)',
});
