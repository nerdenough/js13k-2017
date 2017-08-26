const $ = {}
$.width = 1280
$.height = 720
$.canvas = document.getElementById('canvas')
$.ctx = $.canvas.getContext('2d')
$.previousTimestamp = 0
$.tileSize = 64
$.tiles = []
$.trees = []

$.init = function () {
  $.canvas.width = $.width
  $.canvas.height = $.height

  // Initialise player
  $.player = new $.Player($.width / 2 - 16, $.height / 2 - 24)

  // Initialise tiles
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      $.tiles.push(new $.Tile(i * $.tileSize, j * $.tileSize))
    }
  }

  // Initialise trees
  for (let i = 0; i < 100; i++) {
    $.trees.push(new $.Tree(Math.random() * $.width, Math.random() * $.height))
  }
}

$.update = function (dt) {
  $.tiles.forEach(tile => tile.update(dt))

  $.trees.sort((a, b) => a.y - b.y)
  $.trees.forEach(tree => tree.update(dt))
  $.player.update(dt)
}

$.render = function () {
  $.ctx.clearRect(0, 0, $.width, $.height)
  $.tiles.forEach(tile => tile.render())
  $.trees.forEach(tree => tree.render())
  $.player.render()
}

$.loop = function (timestamp) {
  const dt = (timestamp - $.previousTimestamp) / 16
  $.previousTimestamp = timestamp
  $.update(dt)
  $.render()
  window.requestAnimationFrame($.loop)
}

window.addEventListener('load', () => {
  $.init()
  $.loop(0)
})
