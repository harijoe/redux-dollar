import { take } from 'redux-saga/effects'
import generateActionType from 'lib/generators/generateActionType'

export default key => take(generateActionType(key))
