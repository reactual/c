/**
 * Config options for library
 * @type {Object}
 * @dict
 */
const config = {
  /** diff settings based on env */
  env: {
    production: {},
    development: {},
    staging: {},
    test: {}
  },
  /** format defaults or dict */
  inspect: { colors: true, depth: null }
}

export default config
