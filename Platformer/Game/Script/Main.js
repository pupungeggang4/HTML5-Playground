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
    framePrevious = Date.now()
    frameCurrent = framePrevious
    delta = frameCurrent - framePrevious

    if (scene === 'Edit') {
        loopEdit()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let pos = {
        x: (event.clientX - targetRect.left) / targetRect.width * canvas.width,
        y: (event.clientY - targetRect.top) / targetRect.height * cavnas.height
    }
    let button = event.button

    if (state === 'Start') {
        state = ''
    }

    if (scene === 'Edit') {
        mouseUpEdit(pos, button)
    } else if (scene === 'Game') {
        mouseUpGame(pos, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (state === 'Start') {
        state = ''
    }

    if (scene === 'Edit') {
        keyDownEdit(key)    
    } else if (scene === 'Game') {
        keyDownGame(key)
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
