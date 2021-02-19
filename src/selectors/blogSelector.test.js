import { getBlogs } from './blogSelector';

describe('blog selectors', () => {
  it('select the list of blogs from state', () => {
    const state = {
      blogs: {
        blogs: [{
          title: 'My first post',
          blog: 'All of my words!!!'
        },
        {
          title: 'My second post',
          blog: 'Two.'
        }]
      }
    };

    const blogs = getBlogs(state);

    expect(blogs).toEqual(
      [{
        title: 'My first post',
        blog: 'All of my words!!!'
      },
      {
        title: 'My second post',
        blog: 'Two.'
      }]
    );
  });
});
