window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    renderElement = document.getElementById('field')
    gameInit()
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    render()
    gameLoop = requestAnimationFrame(loop)
}

function gameInit() {
    field = new Field()
    player = new Player()
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}
