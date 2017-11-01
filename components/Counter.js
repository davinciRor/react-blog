import React from 'react'
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import bind from '_';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      DOM.div({},
        DOM.p({}, `${this.props.label}: ${this.state.count}`),
        DOM.button({ onClick: this.handleClick }, '+')
      )
    )
  }
}

Counter.defaultProps = {
  count: 0
};

Counter.propsType = {
  count: PropTypes.number
};

export default Counter;