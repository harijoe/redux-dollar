import { createStore } from 'redux'
import generateReducer from './generators/generateReducer'
import generateInitialState from './generators/generateInitialState'
import generateActionCreator from './generators/generateActionCreator'

export default (config) => {
  const reducer = generateReducer(config)
  const initialState = generateInitialState(config)
  const store = createStore(reducer, initialState)

  store.dispatchAction = (configKey, payload) => store.dispatch(generateActionCreator(configKey)(payload))

  return store
}
