import React from 'react';
import { useSelector } from 'react-redux';
import CommentForm from '../../containers/comments/CommentForm';
import { getComments } from '../../selectors/commentSelector';
import CommentDetails from './CommentDetails';
import styles from './CommentList.css';

export default function CommentList() {
  const comments = useSelector(getComments);

  const commentElements = comments.map(comment => (
    <li key={comment.commentIndex}>
      <CommentDetails {...comment} />
    </li>
  ));

  return (
    <div className={styles.CommentList}>
      <CommentForm />
      Comments:
      {commentElements}
    </div>
  );
}
