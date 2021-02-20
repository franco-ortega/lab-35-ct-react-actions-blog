/* eslint-disable max-len */
import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.blogIndex]: [
          ...(state[action.payload.blogIndex] || []),
          action.payload.comment
        ]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.blogIndex]: 
          state[action.payload.blogIndex].filter((_, i) => i !== action.payload.commentIndex)
      };
    default:
      return state;
  }
}
