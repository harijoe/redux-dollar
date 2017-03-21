import _ from 'lodash'

export default key => state => _.get(state, key['_id'].replace('_', '.'))
