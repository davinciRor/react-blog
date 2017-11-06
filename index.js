require('babel-register');
require("https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js");
require("https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.18/c3.min.js");

import React from 'react';
import ReactDOM from 'react-dom';
import BlogPage from '/components/BlogPage';

const posts = [
  {
    id: 0,
    image: {
      style: {
        width: '400px',
        height: '450px'
      },
      src: 'https://image.shutterstock.com/z/stock-vector-grunge-rubber-stamp-with-text-default-vector-illustration-208383556.jpg',
      alt: 'DEFAULT'
    },
    text: 'POST 1',
    likes: 10
  },
  {
    id: 1,
    image: {
      style: {
        width: '400px',
        height: '450px'
      },
      src: 'https://image.shutterstock.com/z/stock-vector-grunge-rubber-stamp-with-text-default-vector-illustration-208383556.jpg',
      alt: 'DEFAULT2'
    },
    text: 'POST 2',
    likes: 4
  }
];

ReactDOM.render(
  React.createElement(BlogPage, {posts: posts}),
  document.body
);