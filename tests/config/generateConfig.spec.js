import generateConfig from 'lib/config/generateConfig'
import configA from '../fixtures/config'
import generatedConfigA from '../fixtures/generatedConfig'

describe('(Lib) generateConfig', () => {
  const config = generateConfig(configA)

  // Todo: use symbol for _id ?

  it('should generate initial config from configA', () => {
    expect(config).to.be.eql(generatedConfigA)
  })
})
