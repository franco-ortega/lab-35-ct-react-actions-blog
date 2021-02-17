import React from 'react';
import BlogForm from '../../containers/blogs/BlogForm';
import BlogList from '../../containers/blogs/BlogList';
import { BlogProvider } from '../../state/BlogProvider';

export default function App() {
  return (
    <BlogProvider>
      <BlogList />
      <BlogForm />
    </BlogProvider>
  );
}
