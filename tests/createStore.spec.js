import generatedConfigA from './fixtures/generatedConfig'
import generateInitialState from 'lib/generators/generateInitialState'
import generateActionCreator from 'lib/generators/generateActionCreator'
import createStore from 'lib/createStore'
import _ from 'lodash'

describe('(Lib) createStore', () => {
  const store = createStore(generatedConfigA, () => null)

  it('should set initial state', () => {
    expect(store.getState().auth.mystring).to.be.eql('initial string')
  })

  it('should dispatch generated actions', () => {
    const actionCreator = generateActionCreator(generatedConfigA.auth.mynumber)
    store.dispatch(actionCreator('myValue'))
    const initialState = generateInitialState(generatedConfigA)
    let expectedNewState = _.cloneDeep(initialState)
    expectedNewState.auth.mynumber = 'myValue'
    expect(store.getState()).to.be.eql(expectedNewState)
  })

  it('should expose a method dispatchAction to dispatch actions in a handy way', () => {
    store.dispatchAction(generatedConfigA.auth.mynumber, 'myValue')
    const initialState = generateInitialState(generatedConfigA)
    let expectedNewState = _.cloneDeep(initialState)
    expectedNewState.auth.mynumber = 'myValue'
    expect(store.getState()).to.be.eql(expectedNewState)
  })
})
