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
