const $ = {}
$.width = 1280
$.height = 720
$.canvas = document.getElementById('canvas')
$.ctx = $.canvas.getContext('2d')
$.previousTimestamp = 0
$.tileSize = 64
$.tiles = []

// Player
$.Player = function (x, y) {
  this.x = x
  this.y = y
}

$.Player.prototype.update = function (dt) {

}

$.Player.prototype.render = function () {
  $.ctx.fillStyle = 'blue'
  $.ctx.fillRect(this.x, this.y, 32, 48)
}

// Tiles
$.Tile = function (x, y) {
  this.x = x
  this.y = y
}

$.Tile.prototype.update = function (dt) {
}

$.Tile.prototype.render = function () {
  if (this.x + $.tileSize > 0 && this.y + $.tileSize > 0 && this.x < $.width && this.y < $.height) {
    $.ctx.strokeStyle = 'red'
    $.ctx.fillStyle = 'green'
    $.ctx.fillRect(this.x, this.y, $.tileSize, $.tileSize)
    $.ctx.strokeRect(this.x, this.y, $.tileSize, $.tileSize)
  }
}

// Main Game
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
}

$.update = function (dt) {
  $.tiles.forEach(tile => tile.update(dt))
  $.player.update(dt)
}

$.render = function () {
  $.ctx.clearRect(0, 0, $.width, $.height)
  $.tiles.forEach(tile => tile.render())
  $.player.render()
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
