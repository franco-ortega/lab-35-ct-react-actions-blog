export const CREATE_COMMENT = 'CREATE_COMMENT';

export const createComment = (blogIndex, commentIndex, comment) => ({
  type: CREATE_COMMENT,
  payload: { blogIndex, commentIndex, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';

export const deleteComment = (blogIndex, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { blogIndex, commentIndex }
});
