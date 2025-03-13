window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
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