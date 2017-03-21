import take from 'lib/effects/take'
import generatedConfigA from '../fixtures/generatedConfig'
import generateActionType from 'lib/generators/generateActionType'
import { take as classicTake } from 'redux-saga/effects'

describe('(Lib) take', () => {
  it('should create take effect', () => {
    const effect = take(generatedConfigA.auth.mynumber)
    const expectedEffect = classicTake(generateActionType(generatedConfigA.auth.mynumber))

    expect(effect).to.deep.equal(expectedEffect)
  })
})
