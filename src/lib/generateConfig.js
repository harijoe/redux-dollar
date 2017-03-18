export const generateConfig = (config, prefix = '') => {
  let result = {}
  if (config !== null) {
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
