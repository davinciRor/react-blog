import React from 'react'
import DOM from 'react-dom-factories';
import Image from './Image'
import TextSpan from './TextSpan'
import Counter from './Counter'
import PropTypes from 'prop-types';

const Post = ({ image, text, metadata }) => {
  return DOM.div(
    {},
    React.createElement(
      Image,
      image
    ),
    React.createElement(TextSpan, { text: text }),
    DOM.ul(
      {},
      DOM.li({}, `Author: ${metadata.author}`),
      DOM.li({}, `Created ${metadata.created_at}`),
      DOM.li({}, `Updated ${metadata.updated_at}`)
    ),
    React.createElement(Counter, { count: 0, label: 'Likes' })
  );
};

Post.defaultProps = {
  metadata: {
    author: 'Default',
    created_at: '01-01-2017',
    updated_at: '01-01-2017'
  }
};

Post.propTypes = {
  metadata: PropTypes.object,
  image: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Post;