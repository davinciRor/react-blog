import React from 'react'
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import Post from './Post'
import _ from 'lodash';

const PostsList = ({handleLikeClick, posts }) => {
  return DOM.ul(
    null,
    _.map(
      posts,
      (post) => {
        return DOM.li({ key: post.id } , React.createElement(
          Post,
          {
            ...post,
            handleLikeClick: handleLikeClick,
            id: post.id
          }
        ));
      }
    )
  );
};

PostsList.defaultProps = {
  blogPosts: PropTypes.array
};

export default PostsList;