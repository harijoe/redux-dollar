import _ from 'lodash'
import leaf from 'lib/generateLeaf'

describe('(Lib) generateLeaf', () => {
  it('should generate leaf for initialValue', () => {
    const actual = leaf({ initialValue: 'initial string' })
    const expected = { _isLeaf: true, _initialValue: 'initial string' }
    expect(actual).to.be.eql(expected)
  })

  it('should generate leaf for empty object', () => {
    const actual = leaf({})
    const expected = { _isLeaf: true }
    expect(actual).to.be.eql(expected)
  })

  it('should generate leaf without any argument', () => {
    const actual = leaf()
    const expected = { _isLeaf: true }
    expect(actual).to.be.eql(expected)
  })

  it('should generate leaf with an unhandle argument', () => {
    const actual = leaf([])
    const expected = { _isLeaf: true }
    expect(actual).to.be.eql(expected)
  })

  it('should generate leaf for initialValue set at null', () => {
    const actual = leaf({ initialValue: null })
    const expected = { _isLeaf: true, _initialValue: null }
    expect(actual).to.be.eql(expected)
  })

  it('should ignore unknown values', () => {
    const actual = leaf({ unknownProperty: 'value' })
    const expected = { _isLeaf: true }
    expect(actual).to.be.eql(expected)
  })

  leaf({})
  leaf({ init: null })
  leaf({ init: null })
  leaf({ init: 0 })
})
