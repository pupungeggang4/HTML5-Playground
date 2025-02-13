window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    canvas.addEventListener('mouseup', mouseUp, false)

    frameCurrent = Date.now()
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    framePrevious = frameCurrent
    frameCurrent = Date.now()
    delta = frameCurrent - framePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Card') {
        loopCard()
    }

    gameLoop = requestAnimationFrame(loop)
}

function keyDown(event) {
    let key = event.key

    if (state === 'Start') {
        state = ''
    }

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Card') {
        keyDownCard(key)
    }
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let pos = {x: (event.clientX - targetRect.left) / targetRect.width * canvas.width, y: (event.clientY - targetRect.top) / targetRect.height * canvas.height}
    let button = event.button

    if (state === 'Start') {
        state = ''
    }

    if (scene === 'Title') {
        mouseUpTitle(pos, button)
    } else if (scene === 'Card') {
        mouseUpCard(pos, button)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        alert(`${url}\nLine ${line},${col}\n${err}`)
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}
