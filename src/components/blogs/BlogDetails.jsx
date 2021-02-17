import React from 'react';
import PropTypes from 'prop-types';

export default function BlogDetails({ title, blog }) {
  return (
    <div>
      Blog Details: blog blog bloggy blog blogger.
      <p>{title}</p>
      <p>{blog}</p>
    </div>
  );
}

BlogDetails.propTypes = {
  title: PropTypes.string.isRequired,
  blog: PropTypes.string.isRequired,
};
