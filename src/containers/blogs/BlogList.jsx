import React from 'react';
import BlogDetails from '../../components/blogs/BlogDetails';
import { getBlogs } from '../../selectors/blogSelector';
import { useSelector } from '../../state/BlogProvider';

export default function Blog() {
  const blogs = useSelector(getBlogs);

  const blogElements = blogs.map(blog => (
    <li key={blog.title}>
      <BlogDetails {...blog} />
    </li>
  ));

  return (
    <ul>
      Blog Posts:
      {blogElements}
    </ul>
  );
}
