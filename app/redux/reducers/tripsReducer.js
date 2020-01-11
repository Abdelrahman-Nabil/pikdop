import { TRIPS } from '../actions/types'

export const tripsReducer  = (state = [], action) => {
  switch (action.type) {
    case TRIPS:
      return action.payload
    default:
      return state
  }
}
