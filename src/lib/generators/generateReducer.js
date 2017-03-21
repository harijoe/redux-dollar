import _ from 'lodash'

export default config => (prevState, action) => {
  if (action == null || action.type.indexOf('@@dollar/') !== 0) {
    return prevState
  }

  let path = action.type.slice('@@dollar/'.length).split('_')
  path.splice(-2, 1)
  path = path.map(s => s.toLowerCase()).join('.')

  const newState = _.cloneDeep(prevState)
  _.set(newState, path, action.payload)

  return newState
}
