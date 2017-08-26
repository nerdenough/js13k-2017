const $ = {}
$.width = 1280
$.height = 720
$.canvas = document.getElementById('canvas')
$.ctx = $.canvas.getContext('2d')
$.previousTimestamp = 0
$.tileSize = 64
$.tiles = []

// Tiles
$.Tile = function (x, y) {
  this.x = x
  this.y = y
}

$.Tile.prototype.update = function (dt) {
}

$.Tile.prototype.render = function () {
  $.ctx.strokeStyle = 'red'
  $.ctx.fillStyle = 'green'
  $.ctx.fillRect(this.x * $.tileSize, this.y * $.tileSize, $.tileSize, $.tileSize)
  $.ctx.strokeRect(this.x * $.tileSize, this.y * $.tileSize, $.tileSize, $.tileSize)
}

// Main Game
$.init = function () {
  $.canvas.width = $.width
  $.canvas.height = $.height

  // Initialise tiles
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      $.tiles.push(new $.Tile(i, j))
    }
  }
}

$.update = function (dt) {
}

$.render = function () {
  $.ctx.clearRect(0, 0, $.width, $.height)
  $.tiles.forEach(tile => tile.render())
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
