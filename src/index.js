import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function increment () {
  return {
    type: INCREMENT
  }
}

function decrement () {
  return {
    type: DECREMENT
  }
}

const actionCreators = { increment, decrement }

const BLANK_STATE = {
  amount: 0
}

function reducer (state = BLANK_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        amount: state.amount + 1
      }
    case DECREMENT:
      return {
        amount: state.amount - 1
      }
    default:
      return state
  }
}

class MainComponent extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.state.amount}</h1>
        <button className="increment" onClick={this.props.actions.increment}>
          Increment
        </button>
        <button className="decrement" onClick={this.props.actions.decrement}>
          Decrement
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})
const MainComponentConnected = connect(mapStateToProps, mapDispatchToProps)(MainComponent)

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer())
ReactDOM.render(
  <Provider store={store}>
    <MainComponentConnected/>
  </Provider>,
  document.getElementById('root')
)
