import React from 'react'
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const TextSpan = ({text}) => {
  return DOM.span({}, text);
};

TextSpan.defaultProps = {
  text: 'Default TEXT'
};

TextSpan.propTypes = {
  text: PropTypes.string
};

export default TextSpan;