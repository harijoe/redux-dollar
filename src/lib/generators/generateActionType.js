import generateActionCreator from './generateActionCreator'

export default key => generateActionCreator(key)().type
