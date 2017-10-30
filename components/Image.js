import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const Image = ({ image }) => {
  return DOM.img
  ({
    style: image.style,
    src:   image.src,
    alt:   image.alt
  });
};

Image.defaultProps = {
  image: {
    style:
      {
        width: '400px',
        height: '450px'
      },
    src: 'https://image.shutterstock.com/z/stock-vector-grunge-rubber-stamp-with-text-default-vector-illustration-208383556.jpg',
    alt: 'DEFAULT'
  }
};

Image.propTypes = {
  image: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Image;