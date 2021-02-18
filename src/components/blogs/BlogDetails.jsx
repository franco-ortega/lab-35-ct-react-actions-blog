import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogProvider';
import { deleteBlog } from '../../actions/postActions';

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
    </div>
  );
}

BlogDetails.propTypes = {
  title: PropTypes.string.isRequired,
  blog: PropTypes.string.isRequired,
};
