import React from 'react';
import BlogForm from '../../containers/blogs/BlogForm';
import BlogList from '../../containers/blogs/BlogList';

export default function App() {
  return (
    <>
      <h1>Welcome to the Blog</h1>
      <BlogForm />
      <BlogList />
    </>
  );
}
