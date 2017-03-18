import { createStore } from 'redux'
import generateReducer from './generateReducer'
import generateInitialState from './generateInitialState'

export default (config) => {
  const reducer = generateReducer(config)
  const initialState = generateInitialState(config)
  const store = createStore(reducer, initialState)

  return store
}
