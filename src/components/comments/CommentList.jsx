import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CommentForm from '../../containers/comments/CommentForm';
import { getComments } from '../../selectors/commentSelector';
import CommentDetails from './CommentDetails';
import styles from './CommentList.css';

export default function CommentList({ blogIndex }) {
  const comments = useSelector(getComments);
  const commentsArray = comments[blogIndex] || [];

  const commentElements = commentsArray.map((comment, i) => (
    <li key={i}>
      <CommentDetails
        comment={comment}
        blogIndex={blogIndex}
        commentIndex={i}
      />
    </li>
  ));

  return (
    <div className={styles.CommentList}>
      <CommentForm blogIndex={blogIndex} />
      Comments:
      {commentElements}
    </div>
  );
}

CommentList.propTypes = {
  blogIndex: PropTypes.number.isRequired
};
