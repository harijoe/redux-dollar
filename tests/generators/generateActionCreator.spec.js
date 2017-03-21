import generatedConfigA from '../fixtures/generatedConfig'
import generateActionCreator from 'lib/generators/generateActionCreator'

describe('(Lib) generateActionCreator', () => {
  it('should create an action for simple case', () => {
    const actionCreator = generateActionCreator(generatedConfigA.auth)
    const action = actionCreator('myValue')
    const expectedAction = { type: '@@dollar/SET_AUTH', payload: 'myValue' }
    expect(action).to.be.eql(expectedAction)
  })

  it('should create an action for nested case', () => {
    const actionCreator = generateActionCreator(generatedConfigA.auth.mynumber)
    const action = actionCreator('myValue')
    const expectedAction = { type: '@@dollar/AUTH_SET_MYNUMBER', payload: 'myValue' }
    expect(action).to.be.eql(expectedAction)
  })

  it('should create an action without payload if not defined', () => {
    const actionCreator = generateActionCreator(generatedConfigA.auth.mynumber)
    const action = actionCreator()
    const expectedAction = { type: '@@dollar/AUTH_SET_MYNUMBER' }
    expect(action).to.be.eql(expectedAction)
  })
})
