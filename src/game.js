const $ = {}
$.width = 1280
$.height = 720
$.canvas = document.getElementById('canvas')
$.ctx = $.canvas.getContext('2d')
$.previousTimestamp = 0

$.init = function () {
  $.canvas.width = $.width
  $.canvas.height = $.height
}

$.update = function (dt) {
}

$.render = function () {
  $.ctx.clearRect(0, 0, $.width, $.height)
}

$.loop = function (timestamp) {
  const dt = (timestamp - $.previousTimestamp) / 16
  $.previousTimestamp = timestamp
  $.update(dt)
  $.render()
  window.requestAnimationFrame($.loop)
}

$.init()
$.loop(0)
