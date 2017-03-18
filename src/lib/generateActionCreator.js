import _ from 'lodash'

export default key => payload => {
  const array = key['_id'].split('_')
  array.splice(-1, 0, 'SET')
  return { type: '@@dollar/' + array.map(s => s.toUpperCase()).join('_'), payload }
}
