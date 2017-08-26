$.Player = function (x, y) {
  $.Entity.call(this, x, y)
}

$.Player.prototype.update = function (dt) {
}

$.Player.prototype.render = function () {
  $.ctx.fillStyle = 'black'
  $.ctx.fillRect(this.x, this.y, 32, 48)
}
