import leaf from 'lib/generateLeaf'

export default {
  auth: {
    mystring: leaf({ initialValue: 'initial string' }),
    mybool: leaf(),
    mynumber: leaf(),
  },
  post: {
    onestring: leaf({ initialValue: null }),
    anotherstring: leaf({ initialValue: 0 }),
  },
}
