import put from 'lib/effects/put'
import generatedConfigA from '../fixtures/generatedConfig'
import generateActionCreator from 'lib/generators/generateActionCreator'
import { put as classicPut } from 'redux-saga/effects'

describe('(Lib) put', () => {
  it('should create put effect', () => {
    const effect = put(generatedConfigA.auth.mynumber, 'myValue')
    const expectedEffect = classicPut(generateActionCreator(generatedConfigA.auth.mynumber)('myValue'))
    expect(effect).to.deep.equal(expectedEffect)
  })
})
