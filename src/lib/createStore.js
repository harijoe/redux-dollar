import { createStore } from 'redux'
import generateReducer from './generateReducer'
import generateInitialState from './generateInitialState'
import generateActionCreator from './generateActionCreator'

export default (config) => {
  const reducer = generateReducer(config)
  const initialState = generateInitialState(config)
  const store = createStore(reducer, initialState)

  store.dispatchAction = (configKey, payload) => store.dispatch(generateActionCreator(configKey)(payload))

  return store
}
