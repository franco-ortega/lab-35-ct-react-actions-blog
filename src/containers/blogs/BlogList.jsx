import React from 'react';
import BlogDetails from '../../components/blogs/BlogDetails';
import { useBlogState } from '../../state/BlogProvider';

export default function Blog() {
  const { blogs } = useBlogState();

  const blogElements = blogs.map(blog => (
    <li key={blog.title}>
      <BlogDetails {...blog} />
    </li>
  ));

  return (
    <ul>
      Blog: This is the blog!
      {blogElements}
    </ul>
  );
}
