import React, { useState } from 'react';
import { createBlog } from '../../actions/postActions';
import { useDispatch } from 'react-redux';

export default function BlogForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [blog, setText] = useState('');

  const onBlogSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog({ title, blog }));
  };

  return (
    <div>
      <p>Blog Form</p>
      <form onSubmit={onBlogSubmit}>
        Title:
        <br />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <br />
        Text:
        <br />
        <textarea
          name="hello"
          cols="60"
          rows="20"
          placeholder="Text"
          value={blog}
          onChange={({ target }) => setText(target.value)}
        ></textarea>
        <br />
        <button>Blog It!</button>
      </form>
    </div>
  );
}
