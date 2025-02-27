window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    renderElement = document.getElementById('field')
    game = new Game()
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    game.handleFrame()
    field.handleFrame()
    render()
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
