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

function strokeRect(rect) {
    context.strokeRect(rect[0], rect[1], rect[2], rect[3])
}

function strokeRectCenter(rect, camera) {

}

function fillText(text, pos) {
    context.fillText(text, pos[0], pos[1])
}
