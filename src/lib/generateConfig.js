import _ from 'lodash'

export const generateConfig = (config, prefix = '') => {
  let result = {}
  if (config['_isLeaf'] === true) {
    result = _.omit(config, '_isLeaf')
  } else {
    result = Object.keys(config)
      .reduce((result, key) => {
        if (key === '_id') {
          return result
        }
        result[key] = generateConfig(config[key], `${prefix}_${key}`)
        return result
      }, {})
  }
  if (prefix !== '') {
    result._id = prefix.slice(1)
  }

  return result
}

export default generateConfig
