import React from 'react';
import BlogDetails from '../../components/blogs/BlogDetails';
import BlogForm from './BlogForm';

export default function Blog() {
  return (
    <div>
      Blog: This is the blog!
      <BlogDetails />
      <BlogForm />
    </div>
  );
}
