import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  modals: {
    blogComingSoon: boolean;
    contact: boolean;
    projectDetails: number | null; // project ID for project details modal
  };
  navigation: {
    activeSection: string;
    isMenuOpen: boolean;
  };
  filters: {
    projectTechnology: string | null;
    experienceCompany: string | null;
  };
  interactions: {
    lastVisitedSection: string | null;
    scrollProgress: number;
  };
}

const initialState: UIState = {
  modals: {
    blogComingSoon: false,
    contact: false,
    projectDetails: null,
  },
  navigation: {
    activeSection: 'hero',
    isMenuOpen: false,
  },
  filters: {
    projectTechnology: null,
    experienceCompany: null,
  },
  interactions: {
    lastVisitedSection: null,
    scrollProgress: 0,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Modal management
    openModal: (state, action: PayloadAction<keyof UIState['modals']>) => {
      const modalName = action.payload;
      if (modalName in state.modals && modalName !== 'projectDetails') {
        (state.modals as any)[modalName] = true;
      }
    },
    closeModal: (state, action: PayloadAction<keyof UIState['modals']>) => {
      const modalName = action.payload;
      if (modalName in state.modals) {
        if (modalName === 'projectDetails') {
          state.modals.projectDetails = null;
        } else {
          (state.modals as any)[modalName] = false;
        }
      }
    },
    closeAllModals: (state) => {
      state.modals.blogComingSoon = false;
      state.modals.contact = false;
      state.modals.projectDetails = null;
    },
    openProjectDetailsModal: (state, action: PayloadAction<number>) => {
      state.modals.projectDetails = action.payload;
    },

    // Navigation management
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.navigation.activeSection = action.payload;
      state.interactions.lastVisitedSection = action.payload;
    },
    toggleMenu: (state) => {
      state.navigation.isMenuOpen = !state.navigation.isMenuOpen;
    },
    closeMenu: (state) => {
      state.navigation.isMenuOpen = false;
    },

    // Filter management
    setProjectTechnologyFilter: (state, action: PayloadAction<string | null>) => {
      state.filters.projectTechnology = action.payload;
    },
    setExperienceCompanyFilter: (state, action: PayloadAction<string | null>) => {
      state.filters.experienceCompany = action.payload;
    },
    clearFilters: (state) => {
      state.filters.projectTechnology = null;
      state.filters.experienceCompany = null;
    },

    // User interactions
    updateScrollProgress: (state, action: PayloadAction<number>) => {
      state.interactions.scrollProgress = Math.max(0, Math.min(100, action.payload));
    },
  },
});

export const {
  openModal,
  closeModal,
  closeAllModals,
  openProjectDetailsModal,
  setActiveSection,
  toggleMenu,
  closeMenu,
  setProjectTechnologyFilter,
  setExperienceCompanyFilter,
  clearFilters,
  updateScrollProgress,
} = uiSlice.actions;

export default uiSlice.reducer;
