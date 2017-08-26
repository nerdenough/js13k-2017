$.Player = function (x, y) {
  $.Entity.call(this, x, y)
}

$.Player.prototype.update = function (dt) {
}

$.Player.prototype.render = function () {
  $.ctx.fillStyle = 'black'
  $.ctx.fillRect(this.x - 16, this.y - 48, 32, 48)
}
