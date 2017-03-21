import generateConfig from 'lib/config/generateConfig'
import leaf from 'lib/config/generateLeaf'

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
