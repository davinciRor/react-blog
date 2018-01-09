import React from 'react'
import DOM from 'react-dom-factories';
import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: { columns: this.props.columns, type: 'pie' }
    })
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(newProps) {
    this.chart.load({
      columns: newProps.columns
    });
  }

  render() {
    return DOM.div({ref: 'chart'})
  }
}

export default PieChart;