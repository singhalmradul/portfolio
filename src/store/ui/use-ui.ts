import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';
import {
  selectIsBlogModalOpen,
  selectIsContactModalOpen,
  selectProjectDetailsModalId,
  selectIsAnyModalOpen,
  selectActiveSection,
  selectIsMenuOpen,
  selectProjectTechnologyFilter,
  selectExperienceCompanyFilter,
  selectHasActiveFilters,
  selectScrollProgress,
  selectLastVisitedSection,
} from './ui.selectors';
import {
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
} from './ui.slice';
import type { UIState } from './ui.slice';

export const useUI = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Modal state
  const isBlogModalOpen = useSelector(selectIsBlogModalOpen);
  const isContactModalOpen = useSelector(selectIsContactModalOpen);
  const projectDetailsModalId = useSelector(selectProjectDetailsModalId);
  const isAnyModalOpen = useSelector(selectIsAnyModalOpen);

  // Navigation state
  const activeSection = useSelector(selectActiveSection);
  const isMenuOpen = useSelector(selectIsMenuOpen);

  // Filter state
  const projectTechnologyFilter = useSelector(selectProjectTechnologyFilter);
  const experienceCompanyFilter = useSelector(selectExperienceCompanyFilter);
  const hasActiveFilters = useSelector(selectHasActiveFilters);

  // Interaction state
  const scrollProgress = useSelector(selectScrollProgress);
  const lastVisitedSection = useSelector(selectLastVisitedSection);

  // Modal actions
  const handleOpenModal = (modalName: keyof UIState['modals']) => {
    dispatch(openModal(modalName));
  };

  const handleCloseModal = (modalName: keyof UIState['modals']) => {
    dispatch(closeModal(modalName));
  };

  const handleCloseAllModals = () => {
    dispatch(closeAllModals());
  };

  const handleOpenProjectDetailsModal = (projectId: number) => {
    dispatch(openProjectDetailsModal(projectId));
  };

  // Navigation actions
  const handleSetActiveSection = (section: string) => {
    dispatch(setActiveSection(section));
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  // Filter actions
  const handleSetProjectTechnologyFilter = (technology: string | null) => {
    dispatch(setProjectTechnologyFilter(technology));
  };

  const handleSetExperienceCompanyFilter = (company: string | null) => {
    dispatch(setExperienceCompanyFilter(company));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  // Interaction actions
  const handleUpdateScrollProgress = (progress: number) => {
    dispatch(updateScrollProgress(progress));
  };

  return {
    // Modal state
    isBlogModalOpen,
    isContactModalOpen,
    projectDetailsModalId,
    isAnyModalOpen,

    // Navigation state
    activeSection,
    isMenuOpen,

    // Filter state
    projectTechnologyFilter,
    experienceCompanyFilter,
    hasActiveFilters,

    // Interaction state
    scrollProgress,
    lastVisitedSection,

    // Modal actions
    openModal: handleOpenModal,
    closeModal: handleCloseModal,
    closeAllModals: handleCloseAllModals,
    openProjectDetailsModal: handleOpenProjectDetailsModal,

    // Navigation actions
    setActiveSection: handleSetActiveSection,
    toggleMenu: handleToggleMenu,
    closeMenu: handleCloseMenu,

    // Filter actions
    setProjectTechnologyFilter: handleSetProjectTechnologyFilter,
    setExperienceCompanyFilter: handleSetExperienceCompanyFilter,
    clearFilters: handleClearFilters,

    // Interaction actions
    updateScrollProgress: handleUpdateScrollProgress,
  };
};
