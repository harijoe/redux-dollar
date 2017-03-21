import { select } from 'redux-saga/effects'
import generateSelector from 'lib/generators/generateSelector'

export default key => select(generateSelector(key))
