const generateInitialState = config => (
  Object.keys(config)
    .filter(key => key !== '_id')
    .reduce((result, key) => {
      if (key === '_initialValue') {
        return result
      }
      const initialValue = config[key]['_initialValue'] != null ? config[key]['_initialValue'] : null

      result[key] = Object.keys(config[key])
        .filter(s => s[0] !== '_').length === 0 ?
        initialValue : generateInitialState(config[key])
      return result
    }, {})
)
export default generateInitialState
