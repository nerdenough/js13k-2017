const $ = {}
$.width = 1280
$.height = 720
$.canvas = document.getElementById('canvas')
$.ctx = $.canvas.getContext('2d')
$.previousTimestamp = 0
$.tileSize = 64
$.tiles = []
$.trees = []

$.keys = {
  up: false,
  down: false,
  left: false,
  right: false
}

// Player
$.Player = function (x, y) {
  this.x = x
  this.y = y
}

$.Player.prototype.update = function (dt) {
}

$.Player.prototype.render = function () {
  $.ctx.fillStyle = 'black'
  $.ctx.fillRect(this.x, this.y, 32, 48)
}

// Tree
$.Tree = function (x, y) {
  this.x = x
  this.y = y
}

$.Tree.prototype.update = function (dt) {
}

$.Tree.prototype.render = function () {
  $.ctx.fillStyle = '#5F9C30'
  $.ctx.strokeStyle = '#3B6E14'
  $.ctx.beginPath()
  $.ctx.moveTo(this.x, this.y)
  $.ctx.lineTo(this.x - 64, this.y)
  $.ctx.lineTo(this.x, this.y - 256)
  $.ctx.lineTo(this.x + 64, this.y)
  $.ctx.lineTo(this.x, this.y)
  $.ctx.fill()
  $.ctx.stroke()
}

// Tiles
$.Tile = function (x, y) {
  this.x = x
  this.y = y
}

$.Tile.prototype.update = function (dt) {
  if ($.keys.up) {
    this.y += dt
  }
  if ($.keys.down) {
    this.y -= dt
  }
  if ($.keys.left) {
    this.x += dt
  }
  if ($.keys.right) {
    this.x -= dt
  }
}

$.Tile.prototype.render = function () {
  if (this.x + $.tileSize > 0 && this.y + $.tileSize > 0 && this.x < $.width && this.y < $.height) {
    $.ctx.strokeStyle = '#85BF58'
    $.ctx.fillStyle = '#8EE04F'
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

$.onKeyDown = function (e) {
  const key = e.keyCode
  if (key === 87 || key === 38) {
    $.keys.up = true
  } else if (key === 83 || key === 40) {
    $.keys.down = true
  } else if (key === 65 || key === 37) {
    $.keys.left = true
  } else if (key === 68 || key === 39) {
    $.keys.right = true
  }
}

$.onKeyUp = function (e) {
  const key = e.keyCode
  if (key === 87 || key === 38) {
    $.keys.up = false
  } else if (key === 83 || key === 40) {
    $.keys.down = false
  } else if (key === 65 || key === 37) {
    $.keys.left = false
  } else if (key === 68 || key === 39) {
    $.keys.right = false
  }
}

$.init()
$.loop(0)
window.addEventListener('keydown', $.onKeyDown)
window.addEventListener('keyup', $.onKeyUp)
