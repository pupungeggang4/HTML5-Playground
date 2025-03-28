window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('screen')
    context = canvas.getContext('2d')

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
    } else if (scene === 'battle') {
        loopBattle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let pos = new Vector2D(
        (event.clientX - targetRect.left) / targetRect.width * canvas.width,
        (event.clientY - targetRect.top) / targetRect.height * canvas.height
    )
    let button = event.button

    if (state === 'init') {
        state = ''
    }

    if (scene === 'title') {
        mouseUpTitle(pos, button)
    } else if (scene === 'battle') {
        mouseUpBattle(pos, button)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        console.log(`${err}|${url}(${line},${col})`)
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}
