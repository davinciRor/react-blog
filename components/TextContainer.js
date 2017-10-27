import React from 'react'
import DOM from 'react-dom-factories';

const TextContainer = ({text}) => {
  return DOM.span({}, text);
};

export default TextContainer;