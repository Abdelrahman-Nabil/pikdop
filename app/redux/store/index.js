import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

let reduxStore = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
  )
)
export default reduxStore
