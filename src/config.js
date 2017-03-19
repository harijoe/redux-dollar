import generateConfig from 'lib/generateConfig'
import leaf from 'lib/generateLeaf'

const config = {
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

export default generateConfig(config)
