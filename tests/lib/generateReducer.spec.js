import _ from 'lodash'
import generatedConfigA from './fixtures/generatedConfigA'
import generateReducer from 'lib/generateReducer'
import generateInitialState from 'lib/generateInitialState'
import generateActionCreator from 'lib/generateActionCreator'

describe('(Lib) generateReducer', () => {
  const reducer = generateReducer(generatedConfigA)
  const initialState = generateInitialState(generatedConfigA)

  it('should generate reducer from generatedConfigA', () => {
    let expectedNewState = _.cloneDeep(initialState)
    expectedNewState.auth.mynumber = 'myValue'
    const actionCreator = generateActionCreator(generatedConfigA.auth.mynumber)
    const action = actionCreator('myValue')
    const newState = reducer(initialState, action)
    expect(newState).to.be.eql(expectedNewState)
  })

  it('should ignore unknown actions', () => {
    const action = { type: 'UNKNOWN_ACTIONS' }
    const newState = reducer(initialState, action)
    expect(newState).to.be.eql(initialState)
  })
})
