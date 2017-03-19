import _ from 'lodash'

const allowedParams = ['initialValue']

export default param => {
  let leaf = { _isLeaf: true }
  if (typeof param === 'object') {
    const keys = _.pick(param, allowedParams)
    const formattedParams = _.reduce(keys, (acc, value, key) => {
      acc['_' + key] = value
      return acc
    }, {})
    leaf = { ...leaf, ...formattedParams }
  }

  return leaf
}
