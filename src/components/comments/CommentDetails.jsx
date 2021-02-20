import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommentDetails.css';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

export default function CommentDetails({ comment, blogIndex, commentIndex }) {
  const dispatch = useDispatch();

  const onDeleteCommentClick = () => {
    console.log('Delete Comment button clicked');
    console.log(commentIndex);
    dispatch(deleteComment({ blogIndex, commentIndex }));
  };

  return (
    <div className={styles.CommentDetails}>
      Comment:
      <p>Blog #: {blogIndex}</p>
      <p>Comment: {comment}</p>
      <button onClick={onDeleteCommentClick}>Delete Comment</button>
    </div>
  );
}

CommentDetails.propTypes = {
  comment: PropTypes.string.isRequired,
  blogIndex: PropTypes.number.isRequired,
  commentIndex: PropTypes.number.isRequired
};
