import { createBlog } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('add a blog with CREATE_BLOG action', () => {
    const state = {
      blogs: []
    };

    const action = createBlog({
      title: 'My first post',
      blog: 'All of my words!!!'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [{
        title: 'My first post',
        blog: 'All of my words!!!'
      }]
    });
  });
});
