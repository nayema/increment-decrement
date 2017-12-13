import actionTypes from './action-types'

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

export default { increment, decrement, addRandomNumber }
