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
