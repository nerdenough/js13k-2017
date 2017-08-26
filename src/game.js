const $ = {}
$.width = 1280
$.height = 720
$.canvas = document.getElementById('canvas')
$.ctx = $.canvas.getContext('2d')
$.previousTimestamp = 0
$.tileSize = 64
$.tiles = []
$.trees = []
$.entities = []

$.init = function () {
  $.canvas.width = $.width
  $.canvas.height = $.height

  // Initialise player
  $.player = new $.Player($.width / 2, $.height / 2 + 24)

  // Initialise tiles
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      $.tiles.push(new $.Tile(i * $.tileSize, j * $.tileSize))
    }
  }

  // Initialise trees
  for (let i = 0; i < 50; i++) {
    $.trees.push(new $.Tree(Math.random() * $.width, Math.random() * $.height))
  }

  $.entities = $.trees.concat($.player)
  console.log('entities', $.entities)
}

$.update = function (dt) {
  $.tiles.forEach(tile => tile.update(dt))

  $.trees.forEach(tree => tree.update(dt))
  $.player.update(dt)
}

$.render = function () {
  $.ctx.clearRect(0, 0, $.width, $.height)
  $.tiles.forEach(tile => tile.render())

  $.entities.sort((a, b) => a.y - b.y)
  $.entities.forEach(entity => entity.render())
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
