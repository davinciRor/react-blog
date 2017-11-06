import React from 'react'
import DOM from 'react-dom-factories';
import _ from 'lodash'

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
      columns: this.chartData(props.posts)
    };
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  chartData(posts) {
    const data = []
    _.each(posts, (post) => {
      data.push([post.text, post.likes]);
  });
    return data;
  }

  handleLikeClick(id) {
    const newPosts = [];
    const tempPosts = [...this.state.posts];
    _.each(tempPosts, (post) => {
      if(post.id === id) {
      post.likes = post.likes + 1;
    }
    newPosts.push(post);
  });
    this.setState({ posts: newPosts });
    this.setState({ columns: this.chartData(newPosts)});
  }

  render() {
    return DOM.div(
      null,
      React.createElement(PieChart, { columns: this.state.columns }),
      React.createElement(PostsList, {
        posts: this.state.posts,
        handleLikeClick: this.handleLikeClick
      })
    );
  }
}
