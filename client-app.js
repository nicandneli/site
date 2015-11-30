// var hg = require('mercury')
var _ = require('lodash')

function getAll () {
  return document.querySelectorAll('.thumbs .thumb')
}

function setDisplay (val) {
  return document.querySelector('.display').setAttribute('style', val)
}

require('hashchange').update(function (hash) {
  console.log('hash is now ' + hash)

  var all = _.map(getAll(), function (one) {
    return {
      href: one.getAttribute('href'),
      src: one.getAttribute('style')
    }
  })
  console.log('all', all)
  var src = _.result(_.find(all, {href: '#' + hash}), 'src')

  console.log('new source ', src)

  if (src) {
    setDisplay(src)
  }
})
