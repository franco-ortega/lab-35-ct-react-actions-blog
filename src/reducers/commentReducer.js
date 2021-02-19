/* eslint-disable max-len */
import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export const initialState = {
  comments: []
};

// comments: [
// { blogIndex: comments },
// { blogIndex: comments }
// ]
// comments: [
// { 0: ['words', 'more words'] },
// { 1: ['words', 'more words'] }
// ]
// if blogIndex key doesn't exist, add new object
// if blogIndex key does exist, add new comment to the value array

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, { blogIndex: action.payload.comment }]
        // state.comments: [...state.comments, action.payload.comment]
      };
    case DELETE_COMMENT:
      return {

      };
    default:
      return state;
  }
}
