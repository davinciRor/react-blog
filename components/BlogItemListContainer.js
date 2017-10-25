import React from 'react'
import DOM from 'react-dom-factories';
import BlogItemContainer from './BlogItemContainer'
import _ from 'lodash';

class BlogItemListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props;
    return DOM.ul(
      null,
      _.map(
        posts,
        (post, key) => {
          return DOM.li({ key }, React.createElement(
            BlogItemContainer,
            {
              imageSrc: post.imageSrc,
              imageAlt: post.imageAlt,
              imageWidth: post.imageWidth,
              imageHeight: post.imageHeight,
              itemText: post.itemText
            }
          ));
        }
      )
    );
  }
}

export default BlogItemListContainer;