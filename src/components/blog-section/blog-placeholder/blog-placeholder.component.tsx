import {
  blogPlaceholder,
  blogPlaceholderTitle,
  blogPlaceholderText
} from '../blog-section.css';

const BlogPlaceholder = () => {
  return (
    <div className={blogPlaceholder}>
      <h3 className={blogPlaceholderTitle}>No Posts Yet 📝</h3>
      <p className={blogPlaceholderText}>
        I'm currently working on creating valuable content. Check back soon for insights and tutorials!
      </p>
    </div>
  );
};

export default BlogPlaceholder;
