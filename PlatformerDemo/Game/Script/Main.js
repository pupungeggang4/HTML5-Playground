window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    game = new Game()
    game.gameLoop = requestAnimationFrame(run)
}

function run() {
    console.log(game.frameCurrent)
    game.framePrevious = game.frameCurrent
    game.frameCurrent = performance.now()
    game.delta = game.frameCurrent - game.framePrevious

    if (this.scene === 'main') {
        SceneMain.loopMain(game)
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