$.Rock = function (x, y) {
  $.Entity.call(this, x, y)
}

$.Rock.prototype.update = function (dt) {
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

$.Rock.prototype.render = function () {
  $.ctx.fillStyle = '#404040'
  $.ctx.strokeStyle = '#202020'
  $.ctx.beginPath()
  $.ctx.moveTo(this.x, this.y)
  $.ctx.lineTo(this.x - 32, this.y)
  $.ctx.lineTo(this.x - 24, this.y - 24)
  $.ctx.lineTo(this.x, this.y - 32)
  $.ctx.lineTo(this.x + 24, this.y - 24)
  $.ctx.lineTo(this.x + 32, this.y)
  $.ctx.lineTo(this.x, this.y)
  $.ctx.fill()
  $.ctx.stroke()
}
