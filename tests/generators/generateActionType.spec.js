import generatedConfigA from '../fixtures/generatedConfig'
import generateActionType from 'lib/generators/generateActionType'

describe('(Lib) generateActionCreator', () => {
  it('should create an action type', () => {
    const actionType = generateActionType(generatedConfigA.auth.mystring)
    expect(actionType).to.be.eql('@@dollar/AUTH_SET_MYSTRING')
  })
})
