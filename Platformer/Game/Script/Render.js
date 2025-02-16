function renderInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.lineWidth = 2
    context.strokeStyle = 'Black'
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 800)
    context.fillRect(0, 0, 1280, 800)
    context.fillStyle = 'Black'
}

function renderFieldInit() {
    fieldContext.lineWidth = 2
    fieldContext.fillStyle = 'White'
    fieldContext.clearRect(0, 0, 2000, 2000)
    fieldContext.fillRect(0, 0, 2000, 2000)
    fieldContext.fillStyle = 'Black'
}

function renderScreen() {
    renderFieldInit()
    player.render()
    field.render()
    context.drawImage(fieldCanvas, 0, 0, UI.edit.screen[2], UI.edit.screen[3], UI.edit.screen[0], UI.edit.screen[1], UI.edit.screen[2], UI.edit.screen[3])
}

function renderBarTop() {
    strokeRect(UI.edit.barTop.rect)
}

function renderBarLeft() {
    strokeRect(UI.edit.barLeft.rect)
}

function renderBarRight() {
    strokeRect(UI.edit.barRight.rect)
}

function renderBarBottom() {
    strokeRect(UI.edit.barBottom.rect)
}

function strokeRect(rect) {
    context.strokeRect(rect[0], rect[1], rect[2], rect[3])
}

function strokeRectCenter(position, size) {
    context.strokeRect(position.x - size.x / 2, position.y - size.y / 2, size.x, size.y)
}

function fillRect(rect) {
    context.fillRect(rect[0], rect[1], rect[2], rect[3])
}

function fillText(text, pos) {
    context.fillText(text, pos[0], pos[1])
}

function drawImage(img, pos) {
    context.drawImage(img, pos[0], pos[1])
}
