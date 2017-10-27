import React from 'react'
import DOM from 'react-dom-factories';
import ImageContainer from './ImageContainer'
import TextContainer from './TextContainer'

class BlogItemContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imageSrc, imageAlt, imageWidth, imageHeight, itemText }  = this.props;
    return DOM.div(
      {},
      React.createElement(
        ImageContainer,
        { imageUrl: imageSrc, captionText: imageAlt, imageWidth: imageWidth, imageHeight: imageHeight }
      ),
      React.createElement(TextContainer, { text: itemText })
    );
  }
}

export default BlogItemContainer;