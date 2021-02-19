import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../actions/commentActions';

export default function CommentForm() {
  const dispatch = useDispatch();

  const [blogIndex, setBlogIndex] = useState(0);
  const [commentIndex, setCommentIndex] = useState(0);
  const [comment, setComment] = useState('');

  const onCommentSubmit = (e) => {
    e.preventDefault();
    setBlogIndex(1);
    setCommentIndex(1);
    dispatch(createComment({ blogIndex, commentIndex, comment }));
  };

  return (
    <div>
      <p>Comment Form</p>
      <form onSubmit={onCommentSubmit}>
        Comment:
        <br />
        <textarea
          name="comment"
          cols="30"
          rows="10"
          placeholder="Comment"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        ></textarea>
        <button>Submit Comment</button>
      </form>
    </div>
  );
}
