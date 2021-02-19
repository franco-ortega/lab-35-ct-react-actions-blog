import React from 'react';
import CommentDetails from './CommentDetails';
import styles from './CommentList.css';

export default function CommentList() {
  return (
    <div className={styles.CommentList}>
      Comments:
      <CommentDetails />
    </div>
  );
}
