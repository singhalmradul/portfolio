import type { BlogPost } from '../../../data/portfolio.types';
import {
  blogPostCard,
  blogPostMeta,
  blogPostDate,
  blogPostCategory,
  blogPostTitle,
  blogPostDescription,
  blogPostFooter,
  blogPostTags,
  blogPostTag,
  blogPostReadTime
} from '../blog-section.css';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={blogPostCard}
      data-no-underline="true"
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
  );
};

export default BlogPostCard;
