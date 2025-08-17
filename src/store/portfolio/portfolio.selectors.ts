import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { Project } from '../../data/portfolio.types';

// Base selector
const selectPortfolioState = (state: RootState) => state.portfolio;

// Memoized selectors for each data piece
export const selectPersonalInfo = createSelector(
  [selectPortfolioState],
  (portfolio) => portfolio.personalInfo
);

export const selectExperience = createSelector(
  [selectPortfolioState],
  (portfolio) => portfolio.experience
);

export const selectSkills = createSelector(
  [selectPortfolioState],
  (portfolio) => portfolio.skills
);

export const selectProjects = createSelector(
  [selectPortfolioState],
  (portfolio) => portfolio.projects
);

export const selectProjectByTitle = (title: string) => createSelector(
  [selectProjects],
  (projects) => projects.find((project: Project) => project.title === title)
);

export const selectBlog = createSelector(
  [selectPortfolioState],
  (portfolio) => portfolio.blog
);

export const selectBlogPosts = createSelector(
  [selectBlog],
  (blog) => blog.posts
);

export const selectUpcomingBlogTopics = createSelector(
  [selectBlog],
  (blog) => blog.upcomingTopics
);

// Loading and error selectors
export const selectPortfolioLoading = createSelector(
  [selectPortfolioState],
  (portfolio) => portfolio.isLoading
);

export const selectPortfolioLoadingMessage = createSelector(
  [selectPortfolioState],
  (portfolio) => portfolio.loadingMessage
);

export const selectPortfolioError = createSelector(
  [selectPortfolioState],
  (portfolio) => portfolio.error
);

// Derived data selectors
export const selectAllTechnologies = createSelector(
  [selectProjects, selectSkills],
  (projects, skills) => {
    const projectTechs = projects.flatMap((project: Project) => project.technologies);
    const skillTechs = skills.flatMap(skillCategory => skillCategory.values);

    return Array.from(new Set([...projectTechs, ...skillTechs])).sort();
  }
);

export const selectProjectsByTechnology = (technology: string) => createSelector(
  [selectProjects],
  (projects) => projects.filter((project: Project) =>
    project.technologies.some((tech: string) =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  )
);

export const selectContactInfo = createSelector(
  [selectPersonalInfo],
  (personalInfo) => ({
    email: personalInfo.email,
    linkedin: personalInfo.linkedin,
    github: personalInfo.github,
    blogUrl: personalInfo.blogUrl,
  })
);
