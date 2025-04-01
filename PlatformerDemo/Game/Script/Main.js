window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    game = new Game()
}

function run() {
    console.log(game.frameCurrent)
    game.framePrevious = game.frameCurrent
    game.frameCurrent = performance.now()
    game.delta = game.frameCurrent - game.framePrevious

    if (game.scene === 'main') {
        SceneMain.loop(game)
    }

    game.gameLoop = requestAnimationFrame(run)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(game.gameLoop)
    }
}

function rightClick() {
    return false
}