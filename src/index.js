import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

import actionTypes from './app/action-types'

function increment (amount) {
  return {
    type: actionTypes.INCREMENT,
    payload: {
      amount
    }
  }
}

function decrement () {
  return {
    type: actionTypes.DECREMENT
  }
}

function addRandomNumber () {
  return {
    type: actionTypes.ADD_RANDOM_NUMBER
  }
}

const actionCreators = { increment, decrement, addRandomNumber }

const BLANK_STATE = {
  amount: 0
}

function reducer (state = BLANK_STATE, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        amount: state.amount + action.payload.amount
      }
    case actionTypes.DECREMENT:
      return {
        amount: state.amount - 1
      }
    case actionTypes.ADD_RANDOM_NUMBER:
      return {
        amount: state.amount + Math.floor(Math.random() * 10)
      }
    default:
      return state
  }
}

class MainComponent extends Component {
  constructor (props) {
    super(props)

    this.incrementOnClick = this.incrementOnClick.bind(this)
  }

  incrementOnClick () {
    this.props.actions.increment(5)
  }

  render () {
    return (
      <div>
        <h1>{this.props.state.amount}</h1>
        <button className="increment" onClick={this.incrementOnClick}>
          Increment
        </button>
        <button className="decrement" onClick={this.props.actions.decrement}>
          Decrement
        </button>
        <button className="add-random-number" onClick={this.props.actions.addRandomNumber}>
          Add random number
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
