require('babel-register');
import React from 'react';
import ReactDOM from 'react-dom';
import PostsList from '/components/PostsList';

const el = document.body;
ReactDOM.render(
  React.createElement(PostsList),
  el
);
