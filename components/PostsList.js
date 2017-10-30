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
      (post, key) => {
        return DOM.li({ key }, React.createElement(
          Post,
          post
        ));
      }
    )
  );
};

PostsList.defaultProps = {
  blogPosts: [
    {
      metadata: {
        author: 'Default',
        created_at: '01-01-2017',
        updated_at: '01-01-2017'
      },
      image: {
        style: {
          width: '100px',
          height: '100px'
        },
        src: 'https://image.shutterstock.com/z/stock-vector-grunge-rubber-stamp-with-text-default-vector-illustration-208383556.jpg',
        alt: 'Default'
      },
      text: 'DEFAULT DEFAULT DEFAULT DEFAULT DEFAULT DEFAULT DEFAULT'
    }
  ]
};

PostsList.defaultProps = {
  blogPosts: PropTypes.array
};

export default PostsList;