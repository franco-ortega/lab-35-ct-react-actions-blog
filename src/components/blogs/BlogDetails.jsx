import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/postActions';
import CommentList from '../comments/CommentList';

export default function BlogDetails({ title, blog }) {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteBlog(title));
  };

  return (
    <div>
      <p>{title}</p>
      <p>{blog}</p>
      <button onClick={onDeleteClick}>Delete Blog Post</button>
      <CommentList />
    </div>
  );
}

BlogDetails.propTypes = {
  title: PropTypes.string.isRequired,
  blog: PropTypes.string.isRequired,
};
