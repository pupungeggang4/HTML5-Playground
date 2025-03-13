window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    canvas.addEventListener('mouseup', mouseUp, false)

    gameLoop = requestAnimationFrame(loop)
}

function loop() {

}

function mouseUp(event) {
    
}

function errorHandle(err, url, line, col, obj) {

}
