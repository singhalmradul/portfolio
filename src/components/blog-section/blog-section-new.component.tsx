import type { BlogPost } from '../../data/portfolio.types';
import { usePortfolioData } from '../../store/portfolio/use-portfolio';
import { useUI } from '../../store/ui/use-ui';
import BlogComingSoonModal from '../blog-coming-soon-modal/blog-coming-soon-modal.component';
import BlogPostCard from './blog-post-card/blog-post-card.component';
import BlogPlaceholder from './blog-placeholder/blog-placeholder.component';
import {
  blogSection,
  blogTitle,
  blogContainer,
  blogPostsGrid,
  blogToggleButton,
  blogToggleContainer
} from './blog-section.css';

const BlogSection = () => {
  const { blog, blogPosts, upcomingTopics } = usePortfolioData();
  const { isBlogModalOpen, openModal, closeModal } = useUI();

  const handleShowModal = () => {
    openModal('blogComingSoon');
  };

  const handleCloseModal = () => {
    closeModal('blogComingSoon');
  };

  return (
    <section id="blog" className={blogSection}>
      <h2 className={blogTitle}>{blog.title}</h2>
      <div className={blogContainer}>
        <div>
          {blogPosts.length > 0 ? (
            <div className={blogPostsGrid}>
              {blogPosts.map((post: BlogPost, index: number) => (
                <BlogPostCard key={index} post={post} />
              ))}
            </div>
          ) : (
            <BlogPlaceholder />
          )}
          {upcomingTopics.length > 0 && (
            <div className={blogToggleContainer}>
              <button
                className={blogToggleButton}
                onClick={handleShowModal}
              >
                View Coming Soon Topics
              </button>
            </div>
          )}
        </div>
      </div>

      <BlogComingSoonModal
        isOpen={isBlogModalOpen}
        onClose={handleCloseModal}
        title="Coming Soon Topics 📝"
        description={blog.description}
        upcomingTopics={upcomingTopics}
      />
    </section>
  );
};

export default BlogSection;
