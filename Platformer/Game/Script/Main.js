window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)
    canvas.addEventListener('keydown', keyDown, false)

    frameCurrent = Date.now()
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {

}

function keyDown(event) {

}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}