import React from 'react'
import DOM from 'react-dom-factories';
import Image from './Image'
import TextSpan from './TextSpan'
import Like from './Like'
import PropTypes from 'prop-types';

const Post = ({ handleLikeClick, image, text, likes, id }) => {
  return DOM.div(
    null,
    React.createElement(
      Image,
      image
    ),
    React.createElement(TextSpan, { text: text }),
    React.createElement(Like, {handleLikeClick: handleLikeClick, postId: id, likes: likes})
  );
};

Post.propTypes = {
  image: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Post;