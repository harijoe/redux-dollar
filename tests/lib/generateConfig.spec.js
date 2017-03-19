import generateConfig from 'lib/generateConfig'
import configA from './fixtures/configA'
import generatedConfigA from './fixtures/generatedConfigA'

describe('(Lib) generateConfig', () => {
  const config = generateConfig(configA)

  // Todo: use symbol for _id ?

  it('should generate initial config from configA', () => {
    expect(config).to.be.eql(generatedConfigA)
  })
})
