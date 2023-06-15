const _plop = require('./plop-templates/_plop')
const _slice = require('./plop-templates/_slice')

module.exports = function (plop) {
  // controller generator
plop.setGenerator('slice', _slice)
  plop.setGenerator('plop', _plop)
}
