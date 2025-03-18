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

function renderStart() {
    context.fillStyle = 'White'
    fillRect(UI.battle.start.rect)
    strokeRect(UI.battle.start.rect)
    context.fillStyle = 'Black'

    strokeRect(UI.battle.start.buttonStart)
    fillText('Start', UI.battle.start.textStart)
}

function renderMenu() {
    context.fillStyle = 'White'
    fillRect(UI.menu.rect)
    strokeRect(UI.menu.rect)
    context.fillStyle = 'Black'

    fillText('Paused', UI.menu.textPause)
    strokeRect(UI.menu.buttonResume)
    fillText('Resume', UI.menu.textResume)
    strokeRect(UI.menu.buttonExit)
    fillText('Exit', UI.menu.textExit)
}

function strokeRect(rect) {
    context.strokeRect(rect[0], rect[1], rect[2], rect[3])
}

function fillRect(rect) {
    context.fillRect(rect[0], rect[1], rect[2], rect[3])
}

function fillText(text, pos) {
    context.fillText(text, pos[0], pos[1])
}
