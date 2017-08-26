$.Tree = function (x, y) {
  $.Entity.call(this, x, y)
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
