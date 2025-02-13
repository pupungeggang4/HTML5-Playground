window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    canvas.addEventListener('mouseup', mouseUp, false)

    frameCurrent = Date.now()
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    framePrevious = frameCurrent
    frameCurrent = Date.now()
    delta = frameCurrent - framePrevious

    if (scene === 'Title') {
        loopTitle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function keyDown() {
}

function mouseUp() {
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        alert(`${url}\nLine ${line},${col}\n${err}`)
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}
