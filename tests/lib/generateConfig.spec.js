import generateConfig from 'lib/generateConfig'
import configA from './fixtures/configA'

describe('(Lib) generateConfig', () => {
  const config = generateConfig(configA)

  // Todo: use symbol for _id ?
  const expectedConfig = {
    auth: {
      _id: 'auth',
      mystring: {
        _id: 'auth_mystring',
      },
      mybool: {
        _id: 'auth_mybool',
      },
      mynumber: {
        _id: 'auth_mynumber',
      }
    },
    post: {
      _id: 'post',
      onestring: {
        _id: 'post_onestring',
      },
      anotherstring: {
        _id: 'post_anotherstring',
      },
    },
  }

  it('should generate initial config from configA', () => {
    expect(config).to.be.eql(expectedConfig)
  })
})
