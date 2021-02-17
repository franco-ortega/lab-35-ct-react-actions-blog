import React from 'react';
import BlogList from '../../containers/blogs/BlogList';
import { BlogProvider } from '../../state/BlogProvider';

export default function App() {
  return (
    <BlogProvider>
      <BlogList />
    </BlogProvider>
  );
}
