import React from 'react'
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import Post from './Post'
import _ from 'lodash';

const PostsList = ({ blogPosts }) => {
  return DOM.ul(
    null,
    _.map(
      blogPosts,
      (post) => {
        return DOM.li({ key: post.toString() } , React.createElement(
          Post,
          post
        ));
      }
    )
  );
};

PostsList.defaultProps = {
  blogPosts: PropTypes.array
};

export default PostsList;