window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)
    canvas.addEventListener('mouseup', mouseUp, false)

    imageLoad()
    game = new GameHandler()

    frameCurrent = Math.floor(performance.now())
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    framePrevious = frameCurrent
    frameCurrent = Math.floor(performance.now())
    delta = frameCurrent - framePrevious

    if (scene === 'title') {
        loopTitle()
    } else if (scene === 'level_select') {
        loopLevelSelect()
    } else if (scene === 'puzzle') {
        loopPuzzle()
    }
    
    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let pos = {
        x: (event.clientX - targetRect.left) / targetRect.width * canvas.width,
        y: (event.clientY - targetRect.top) / targetRect.height * canvas.height
    }
    let button = event.button

    if (state === 'init') {
        state = ''
    }

    if (scene === 'title') {
        mouseUpTitle(pos, button)
    } else if (scene === 'level_select') {
        mouseUpLevelSelect(pos, button)
    } else if (scene === 'puzzle') {
        mouseUpPuzzle(pos, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (state === 'init') {
        state = ''
    }

    if (scene === 'title') {
        keyDownTitle(key)
    } else if (scene === 'level_select') {
        keyDownLevelSelect(key)
    } else if (scene === 'puzzle') {
        keyDownPuzzle(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'title') {
        keyUpTitle(key)
    } else if (scene === 'level_select') {
        keyUpLevelSelect(key)
    } else if (scene === 'puzzle') {
        keyUpPuzzle(key)
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
