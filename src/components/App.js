import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="main-content">value: { props.value }</div>
          <button className="button-plus" onClick={ props.increment }>+1</button>
          <button className="button-minus" onClick={ props.decrement }>-1</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// 通常の場合 
const mapDispatchToProps = dispatch => ({ 
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

/* ↑のショートショートハンドの場合 
const mapDispatchToProps = ({ increment, decrement })
*/

export default connect( mapStateToProps, mapDispatchToProps )(App)

