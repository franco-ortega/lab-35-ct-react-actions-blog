import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommentDetails.css';

export default function CommentDetails({ blogIndex, commentIndex, comment }) {
  return (
    <div className={styles.CommentDetails}>
      Comment:
      <p>Blog #: {blogIndex}</p>
      <p>Comment #: {commentIndex}</p>
      <p>Comment: {comment}</p>
    </div>
  );
}

CommentDetails.propTypes = {
  blogIndex: PropTypes.number.isRequired,
  commentIndex: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired
};
