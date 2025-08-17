import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';
import {
  selectPersonalInfo,
  selectExperience,
  selectSkills,
  selectProjects,
  selectBlog,
  selectBlogPosts,
  selectUpcomingBlogTopics,
  selectPortfolioLoading,
  selectPortfolioLoadingMessage,
  selectPortfolioError,
  selectAllTechnologies,
  selectContactInfo,
} from './portfolio.selectors';
import {
  updatePersonalInfo,
  updateExperience,
  addExperience,
  updateSkills,
  updateProjects,
  addProject,
  updateBlog,
  toggleBlogComingSoon,
  setLoading,
  setLoadingMessage,
  setError,
  requestPortfolioData,
} from './portfolio.slice';
import type {
  PersonalInfo,
  Experience,
  Skills,
  Project,
  BlogData,
} from '../../data/portfolio.types';

export const usePortfolioData = () => {
  const dispatch = useDispatch<AppDispatch>();

  const personalInfo = useSelector(selectPersonalInfo);
  const experience = useSelector(selectExperience);
  const skills = useSelector(selectSkills);
  const projects = useSelector(selectProjects);
  const blog = useSelector(selectBlog);
  const blogPosts = useSelector(selectBlogPosts);
  const upcomingTopics = useSelector(selectUpcomingBlogTopics);
  const isLoading = useSelector(selectPortfolioLoading);
  const loadingMessage = useSelector(selectPortfolioLoadingMessage);
  const error = useSelector(selectPortfolioError);
  const allTechnologies = useSelector(selectAllTechnologies);
  const contactInfo = useSelector(selectContactInfo);

  const handleUpdatePersonalInfo = (info: Partial<PersonalInfo>) => {
    dispatch(updatePersonalInfo(info));
  };

  const handleUpdateExperience = (exp: Experience[]) => {
    dispatch(updateExperience(exp));
  };

  const handleAddExperience = (exp: Experience) => {
    dispatch(addExperience(exp));
  };

  const handleUpdateSkills = (skillData: Skills) => {
    dispatch(updateSkills(skillData));
  };

  const handleUpdateProjects = (projectData: Project[]) => {
    dispatch(updateProjects(projectData));
  };

  const handleAddProject = (project: Project) => {
    dispatch(addProject(project));
  };

  const handleUpdateBlog = (blogData: Partial<BlogData>) => {
    dispatch(updateBlog(blogData));
  };

  const handleToggleBlogComingSoon = () => {
    dispatch(toggleBlogComingSoon());
  };

  const handleSetLoading = (loading: boolean) => {
    dispatch(setLoading(loading));
  };

  const handleSetLoadingMessage = (message: string) => {
    dispatch(setLoadingMessage(message));
  };

  const handleSetError = (errorMessage: string | null) => {
    dispatch(setError(errorMessage));
  };

  const loadPortfolioData = () => {
    dispatch(requestPortfolioData());
  };

  return {
    // Data
    personalInfo,
    experience,
    skills,
    projects,
    blog,
    blogPosts,
    upcomingTopics,
    allTechnologies,
    contactInfo,

    // State
    isLoading,
    loadingMessage,
    error,

    // Actions
    updatePersonalInfo: handleUpdatePersonalInfo,
    updateExperience: handleUpdateExperience,
    addExperience: handleAddExperience,
    updateSkills: handleUpdateSkills,
    updateProjects: handleUpdateProjects,
    addProject: handleAddProject,
    updateBlog: handleUpdateBlog,
    toggleBlogComingSoon: handleToggleBlogComingSoon,
    setLoading: handleSetLoading,
    setLoadingMessage: handleSetLoadingMessage,
    setError: handleSetError,
    loadPortfolioData,
  };
};
