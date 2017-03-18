import generateConfig from 'lib/generateConfig'

// utiliser le $
// export default {
// }
// export const auth = {};
// export const auth_mystring = { type: Types.string, validation: Constraint.isNullable, initialValue:  };
// export const auth_mybool = { type: Types.bool };
// export const auth_mynumber = { type: Types.number };
// export const post = {};
// export const post_onestring = { type: Types.string };
// export const post_anotherstring = { type: Types.string };

// use generateConfig.js

export const config = {
  auth: {
    mystring: null,
    mybool: null,
    mynumber: null,
  },
  post: {
    onestring: null,
    anotherstring: null,
  },
}

export default generateConfig(config)
