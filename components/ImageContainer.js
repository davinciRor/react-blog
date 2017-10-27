import React from 'react';
import DOM from 'react-dom-factories';

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageStyle = {
      width: this.props.imageWidth,
      height: this.props.imageHeight
    };

    return DOM.img(
      {
        style: imageStyle,
        src: this.props.imageUrl,
        alt: this.props.captionText
      }
    );
  }
}

export default ImageContainer;