const generateInitialState = config => (
  Object.keys(config)
    .filter(key => key !== '_id')
    .reduce((result, key) => {
      result[key] = Object.keys(config[key]).length === 1 ? null : generateInitialState(config[key])
      return result
    }, {})
)
export default generateInitialState
