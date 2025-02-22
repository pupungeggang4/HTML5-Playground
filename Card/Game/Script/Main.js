window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)
    canvas.addEventListener('mouseup', mouseUp, false)

    game = new GameManager()

    frameCurrent = Date.now()
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    framePrevious = frameCurrent
    frameCurrent = Date.now()
    delta = frameCurrent - framePrevious

    if (scene === 'title') {
        loopTitle()
    } else if (scene === 'field') {
        loopField()
    } else if (scene === 'battle') {
        loopBattle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function keyDown(event) {
    let key = event.key

    if (state === 'start') {
        state = ''
    }

    if (scene === 'title') {
        keyDownTitle(key)
    } else if (scene === 'field') {
        keyDownField(key)
    } else if (scene === 'battle') {
        keyDownBattle(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'title') {
        keyUpTitle(key)
    } else if (scene === 'field') {
        keyUpField(key)
    } else if (scene === 'battle') {
        keyUpBattle(key)
    }
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let pos = {x: (event.clientX - targetRect.left) / targetRect.width * canvas.width, y: (event.clientY - targetRect.top) / targetRect.height * canvas.height}
    let button = event.button

    if (state === 'start') {
        state = ''
    }

    if (scene === 'title') {
        mouseUpTitle(pos, button)
    } else if (scene === 'field') {
        mouseUpField(pos, button)
    } else if (scene === 'battle') {
        mouesUpBattle(pos, button)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(loop)
    }
}

function rightClick() {
    return false
}
