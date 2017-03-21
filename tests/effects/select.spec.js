import select from 'lib/effects/select'
import generatedConfigA from '../fixtures/generatedConfig'
import generateSelector from 'lib/generators/generateSelector'
import { select as classicSelect } from 'redux-saga/effects'

describe('(Lib) select', () => {
  it('should create select effect', () => {
    const effect = select(generatedConfigA.auth.mynumber)
    const expectedEffect = classicSelect(generateSelector(generatedConfigA.auth.mynumber))
    console.log(effect)
    console.log(expectedEffect)
    expect(effect).to.deep.equal(expectedEffect)
  })
})
