import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="main-content">count: { this.state.count }</div>
          <button className="button-plus" onClick={ this.handlePlusButton }>+1</button>
          <button className="button-minus" onClick={ this.handleMinusButton }>-1</button>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
