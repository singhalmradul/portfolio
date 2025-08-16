import { useEffect } from 'react';
import type { BlogTopic } from '../../data/portfolio.types';
import {
  modal,
  modalContent,
  modalClose,
  modalTitle,
  modalScrollContent,
  modalText,
  modalList,
  modalListItem,
  modalFooter
} from './blog-coming-soon-modal.css';

interface BlogComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  upcomingTopics: BlogTopic[];
  comingSoonMessage: string;
}

const BlogComingSoonModal = ({
  isOpen,
  onClose,
  title,
  description,
  upcomingTopics,
  comingSoonMessage
}: BlogComingSoonModalProps) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent background scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || upcomingTopics.length === 0) {
    return null;
  }

  return (
    <div className={modal} onClick={onClose}>
      <div className={modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={modalClose}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className={modalScrollContent}>
          <h3 className={modalTitle}>{title}</h3>
          <p className={modalText}>
            {description}
          </p>
          <p className={modalText}>
            <strong>Upcoming topics include:</strong>
          </p>
          <ul className={modalList}>
            {upcomingTopics.map((topic) => (
              <li key={topic.id} className={modalListItem}>
                {topic.emoji} {topic.title}
              </li>
            ))}
          </ul>
          <p className={modalFooter}>
            {comingSoonMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogComingSoonModal;
