import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createComment } from '../../actions/commentActions';

export default function CommentForm({ blogIndex }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const onCommentSubmit = (e) => {
    e.preventDefault();

    dispatch(createComment({ blogIndex, comment }));
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

CommentForm.propTypes = {
  blogIndex: PropTypes.number.isRequired
};
