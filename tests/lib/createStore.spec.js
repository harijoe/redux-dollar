import generatedConfigA from './fixtures/generatedConfigA'
import generateInitialState from 'lib/generateInitialState'
import generateActionCreator from 'lib/generateActionCreator'
import createStore from 'lib/createStore'
import _ from 'lodash'

describe('(Lib) createStore', () => {
  const store = createStore(generatedConfigA, () => null)

  it('should dispatch generated actions', () => {
    const actionCreator = generateActionCreator(generatedConfigA.auth.mynumber)
    store.dispatch(actionCreator('myValue'))
    const initialState = generateInitialState(generatedConfigA)
    let expectedNewState = _.cloneDeep(initialState)
    expectedNewState.auth.mynumber = 'myValue'
    expect(store.getState()).to.be.eql(expectedNewState)
  })
})
