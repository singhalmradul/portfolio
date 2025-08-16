import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  personalInfo,
  experience,
  skills,
  projects,
  blog
} from '../../data/portfolio.data';
import type {
  PersonalInfo,
  Experience,
  Skills,
  Project,
  BlogData
} from '../../data/portfolio.types';

export interface PortfolioState {
  personalInfo: PersonalInfo;
  experience: Experience[];
  skills: Skills;
  projects: Project[];
  blog: BlogData;
  isLoading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  personalInfo,
  experience,
  skills,
  projects,
  blog,
  isLoading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    // Data loading states
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    // Personal info updates
    updatePersonalInfo: (state, action: PayloadAction<Partial<PersonalInfo>>) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },

    // Experience updates
    updateExperience: (state, action: PayloadAction<Experience[]>) => {
      state.experience = action.payload;
    },
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experience.unshift(action.payload);
    },

    // Skills updates
    updateSkills: (state, action: PayloadAction<Partial<Skills>>) => {
      state.skills = { ...state.skills, ...action.payload };
    },

    // Projects updates
    updateProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.unshift(action.payload);
    },
    toggleProjectFeatured: (state, action: PayloadAction<number>) => {
      const project = state.projects.find((p: Project) => p.id === action.payload);
      if (project) {
        project.isFeatured = !project.isFeatured;
      }
    },

    // Blog updates
    updateBlog: (state, action: PayloadAction<Partial<BlogData>>) => {
      state.blog = { ...state.blog, ...action.payload };
    },
    toggleBlogComingSoon: (state) => {
      state.blog.isComingSoon = !state.blog.isComingSoon;
    },

    // Saga action creators (for future async operations)
    requestPortfolioData: () => {
      // This will be handled by saga for future API calls
    },
    requestUpdatePersonalInfo: (_state, _action: PayloadAction<Partial<PersonalInfo>>) => {
      // This will be handled by saga for future API calls
    },
  },
});

export const {
  setLoading,
  setError,
  updatePersonalInfo,
  updateExperience,
  addExperience,
  updateSkills,
  updateProjects,
  addProject,
  toggleProjectFeatured,
  updateBlog,
  toggleBlogComingSoon,
  requestPortfolioData,
  requestUpdatePersonalInfo,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
