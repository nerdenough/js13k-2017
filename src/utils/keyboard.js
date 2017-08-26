$.keys = {
  up: false,
  down: false,
  left: false,
  right: false
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

window.addEventListener('keydown', $.onKeyDown)
window.addEventListener('keyup', $.onKeyUp)
