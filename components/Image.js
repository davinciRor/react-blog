import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const Image = ({ style, src, alt }) => {
  return DOM.img
  ({
    style: style,
    src:   src,
    alt:   alt
  });
};

Image.defaultProps = {
  style: {
    width: '400px',
    height: '450px'
  },
  src: 'https://image.shutterstock.com/z/stock-vector-grunge-rubber-stamp-with-text-default-vector-illustration-208383556.jpg',
  alt: 'DEFAULT'
};

Image.propTypes = {
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  }),
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Image;