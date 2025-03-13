window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    canvas.addEventListener('mouseup', mouseUp, false)

    frameCurrent = Date.now()
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    framePrevious = frameCurrent
    frameCurrent = Date.now()
    delta = frameCurrent - framePrevious

    if (scene === 'title') {
        loopTitle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = event.getBoundingClientRect()
    let pos = {
        x: (event.clientX - targetRect.left) / targetRect.width * canvas.width,
        y: (event.clientY - targetRect.top) / targetRect.height * canvas.height
    }
    let button = event.button

    if (state === 'start') {
        state = ''
    }

    if (scene === 'title') {
        mouseUpTitle(pos, button)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}
