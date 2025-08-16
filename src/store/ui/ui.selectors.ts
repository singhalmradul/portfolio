import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Base selector
const selectUIState = (state: RootState) => state.ui;

// Modal selectors
export const selectModals = createSelector(
  [selectUIState],
  (ui) => ui.modals
);

export const selectIsBlogModalOpen = createSelector(
  [selectModals],
  (modals) => modals.blogComingSoon
);

export const selectIsContactModalOpen = createSelector(
  [selectModals],
  (modals) => modals.contact
);

export const selectProjectDetailsModalId = createSelector(
  [selectModals],
  (modals) => modals.projectDetails
);

export const selectIsAnyModalOpen = createSelector(
  [selectModals],
  (modals) => modals.blogComingSoon || modals.contact || modals.projectDetails !== null
);

// Navigation selectors
export const selectNavigation = createSelector(
  [selectUIState],
  (ui) => ui.navigation
);

export const selectActiveSection = createSelector(
  [selectNavigation],
  (navigation) => navigation.activeSection
);

export const selectIsMenuOpen = createSelector(
  [selectNavigation],
  (navigation) => navigation.isMenuOpen
);

// Filter selectors
export const selectFilters = createSelector(
  [selectUIState],
  (ui) => ui.filters
);

export const selectProjectTechnologyFilter = createSelector(
  [selectFilters],
  (filters) => filters.projectTechnology
);

export const selectExperienceCompanyFilter = createSelector(
  [selectFilters],
  (filters) => filters.experienceCompany
);

export const selectHasActiveFilters = createSelector(
  [selectFilters],
  (filters) => filters.projectTechnology !== null || filters.experienceCompany !== null
);

// Interaction selectors
export const selectInteractions = createSelector(
  [selectUIState],
  (ui) => ui.interactions
);

export const selectScrollProgress = createSelector(
  [selectInteractions],
  (interactions) => interactions.scrollProgress
);

export const selectLastVisitedSection = createSelector(
  [selectInteractions],
  (interactions) => interactions.lastVisitedSection
);
