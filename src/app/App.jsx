import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreators from './action-creators'
import { bindActionCreators } from 'redux'

class App extends Component {
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
export default connect(mapStateToProps, mapDispatchToProps)(App)
