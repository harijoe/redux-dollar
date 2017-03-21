import generateInitialState from 'lib/generators/generateInitialState'
import generateSelector from 'lib/generators/generateSelector'
import generatedConfig from '../fixtures/generatedConfig'

describe('(Lib) generateSelector', () => {
  const initialState = generateInitialState(generatedConfig)

  it('should generate selector', () => {
    const selector = generateSelector(generatedConfig.auth.mystring)
    const value = selector(initialState)
    expect(value).to.be.eql(initialState.auth.mystring)
  })
})
