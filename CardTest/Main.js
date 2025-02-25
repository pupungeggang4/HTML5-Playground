window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    renderElement = document.getElementById('field')
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}
