import select from 'lib/effects/select'
import generatedConfig from '../fixtures/generatedConfig'
import generateInitialState from 'lib/generators/generateInitialState'

describe('(Lib) select', () => {
  it('should create select effect', () => {
    const effect = select(generatedConfig.auth.mystring)
    const state = generateInitialState(generatedConfig)

    expect(effect).to.have.property('@@redux-saga/IO')
      .that.is.true
    expect(effect).to.have.property('SELECT')
      .with.property('selector')
        .that.is.a('function')
        .that.satisfies(selector => selector(state) === state.auth.mystring)
    expect(effect).to.have.property('SELECT')
      .that.have.property('args')
      .that.is.an('array')
  })
})
