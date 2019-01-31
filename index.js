const { declare } = require('@babel/helper-plugin-utils')
const presetReact = require('@babel/preset-react')

module.exports = declare((api) => {
  api.assertVersion(7)

  const pragma = 'WebComp.h'

  return {
    presets: [
      [presetReact, { pragma }],
    ],
  }
})
