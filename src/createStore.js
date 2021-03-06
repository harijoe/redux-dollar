import createStore from './lib/createStore'
import generateReducer from './lib/generators/generateReducer'
import generateActionCreator from './lib/generators/generateActionCreator'
import generateConfig from './lib/config/generateConfig'
import generateInitialState from './lib/generators/generateInitialState'
import config from './config'

export default () => {
  const generatedConfig = generateConfig(config)
  const actionCreator = generateActionCreator(generatedConfig.auth.mynumber)
  const action = actionCreator('myvalue')
  const reducer = generateReducer(generatedConfig)
  const initialState = generateInitialState(generatedConfig)
  const result = reducer(initialState, action)
  const store = createStore(
    config
  )

  console.log(store)

  // console.log(generateActionCreator(config.auth))
  // console.log(generateActionCreator(config.auth_mynumber))
  return store
}
