import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/postActions';
import CommentList from '../comments/CommentList';
import styles from './BlogDetails.css';

export default function BlogDetails({ title, blog, blogIndex }) {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteBlog(title));
  };

  return (
    <div className={styles.BlogDetails}>
      <p>{title}</p>
      <p>{blog}</p>
      <button onClick={onDeleteClick}>Delete Blog Post</button>
      <CommentList blogIndex={blogIndex} />
    </div>
  );
}

BlogDetails.propTypes = {
  title: PropTypes.string.isRequired,
  blog: PropTypes.string.isRequired,
  blogIndex: PropTypes.number.isRequired
};
