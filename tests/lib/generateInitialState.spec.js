import generateInitialState from 'lib/generateInitialState'
import generatedConfigA from './fixtures/generatedConfigA'

describe('(Lib) generateInitialState', () => {
  const initialState = generateInitialState(generatedConfigA)

  const expectedInitialState = {
    auth: {
      mystring: null,
      mybool: null,
      mynumber: null,
    },
    post: {
      onestring: null,
      anotherstring: null,
    },
  }

  it('should generate initial state from generatedConfigA', () => {
    expect(initialState).to.be.eql(expectedInitialState)
  })
})