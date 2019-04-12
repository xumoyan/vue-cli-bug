module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.header'],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-cssnext": {}
  }
}
