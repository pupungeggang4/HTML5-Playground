window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    debugElement = document.getElementById('debug')
    game = new GameManager()

    frameCurrent = Math.floor(performance.now())
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    framePrevious = frameCurrent
    frameCurrent = Math.floor(performance.now())
    delta = frameCurrent - framePrevious

    if (scene === 'title') {
        loopTitle()
    } else if (scene === 'platformer') {
        loopPlatformer()
    }

    gameLoop = requestAnimationFrame(loop)
}

function keyDown(event) {
    let key = event.key

    if (key === 'w') {
        keyPress['up'] = true
    }
    if (key === 'a') {
        keyPress['left'] = true
    }
    if (key === 's') {
        keyPress['down'] = true
    }
    if (key === 'd') {
        keyPress['right'] = true
    }

    if (state === 'start') {
        state = ''
    }

    if (scene === 'title') {
        keyDownTitle(key)
    } else if (scene === 'platformer') {
        keyDownPlatformer(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (key === 'w') {
        keyPress['up'] = false
    }
    if (key === 'a') {
        keyPress['left'] = false
    }
    if (key === 's') {
        keyPress['down'] = false
    }
    if (key === 'd') {
        keyPress['right'] = false
    }

    if (scene === 'title') {
        keyUpTitle(key)
    } else if (scene === 'platformer') {
        keyUpPlatformer(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}
