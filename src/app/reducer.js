import actionTypes from './action-types'

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

export default reducer
