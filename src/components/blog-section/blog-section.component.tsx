import { useState } from 'react';
import type { BlogPost } from '../../data/portfolio.types';
import { blog } from '../../data/portfolio.data';
import BlogComingSoonModal from '../blog-coming-soon-modal/blog-coming-soon-modal.component';
import {
  blogSection,
  blogTitle,
  blogContainer,
  blogPlaceholder,
  blogPlaceholderTitle,
  blogPlaceholderText,
  blogPostsGrid,
  blogPostCard,
  blogPostMeta,
  blogPostDate,
  blogPostCategory,
  blogPostTitle,
  blogPostDescription,
  blogPostFooter,
  blogPostTags,
  blogPostTag,
  blogPostReadTime,
  blogToggleButton,
  blogToggleContainer
} from './blog-section.css';

const BlogSection = () => {
  const [showModal, setShowModal] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className={blogSection}>
      <h2 className={blogTitle}>{blog.title}</h2>
      <div className={blogContainer}>
        <div>
          {blog.posts.length > 0 ? (
            <div className={blogPostsGrid}>
              {blog.posts.map((post: BlogPost) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={blogPostCard}
                >
                  <div className={blogPostMeta}>
                    <span className={blogPostDate}>{formatDate(post.date)}</span>
                    <span className={blogPostCategory}>{post.category}</span>
                  </div>
                  <h3 className={blogPostTitle}>{post.title}</h3>
                  <p className={blogPostDescription}>{post.description}</p>
                  <div className={blogPostFooter}>
                    <div className={blogPostTags}>
                      {post.tags.map((tag, index) => (
                        <span key={index} className={blogPostTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={blogPostReadTime}>
                      {post.readTime} min read
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className={blogPlaceholder}>
              <h3 className={blogPlaceholderTitle}>No Posts Yet 📝</h3>
              <p className={blogPlaceholderText}>
                I'm currently working on creating valuable content. Check back soon for insights and tutorials!
              </p>
            </div>
          )}
          {blog.upcomingTopics.length > 0 && (
            <div className={blogToggleContainer}>
              <button
                className={blogToggleButton}
                onClick={() => setShowModal(true)}
              >
                View Coming Soon Topics
              </button>
            </div>
          )}
        </div>
      </div>

      <BlogComingSoonModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Coming Soon Topics 📝"
        description={blog.description}
        upcomingTopics={blog.upcomingTopics}
        comingSoonMessage={blog.comingSoonMessage}
      />
    </section>
  );
};

export default BlogSection;
