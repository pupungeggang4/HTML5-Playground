function renderInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 800)
    context.fillRect(0, 0, 1280, 800)
    context.fillStyle = 'Black'
}

function renderMenu() {
    context.fillStyle = 'White'
    fillRect(UI.menu.rect)
    strokeRect(UI.menu.rect)
    context.fillStyle = 'Black'

    fillText('Paused', UI.menu.textPause)
    strokeRect(UI.menu.buttonResume)
    fillText('Resume', UI.menu.textResume)
    strokeRect(UI.menu.buttonRestart)
    fillText('Restart', UI.menu.textRestart)
    strokeRect(UI.menu.buttonExit)
    fillText('Exit', UI.menu.textExit)
}

function strokeRect(rect) {
    context.strokeRect(rect[0], rect[1], rect[2], rect[3])
}

function fillRect(rect) {
    context.fillRect(rect[0], rect[1], rect[2], rect[3])
}

function strokeRectCenter(rect) {
    context.strokeRect(rect.position.x - rect.size.x / 2, rect.position.y - rect.size.y / 2, rect.size.x, rect.size.y)
}

function fillText(text, pos) {
    context.fillText(text, pos[0], pos[1])
}
