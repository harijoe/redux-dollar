import { put } from 'redux-saga/effects'
import generateActionCreator from 'lib/generators/generateActionCreator'

export default (key, value) => put(generateActionCreator(key)(value))
