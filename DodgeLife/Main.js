window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    gameInit()

    frameCurrent = performance.now()
    gameLoop = requestAnimationFrame(loop)    
}

function gameInit() {
    board = new Board()
}

function loop() {
    framePrevious = frameCurrent
    frameCurrent = performance.now()
    delta = framePrevious - frameCurrent

    gameLoop = requestAnimationFrame(loop)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}