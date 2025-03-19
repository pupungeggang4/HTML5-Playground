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

function renderUpper() {

}

function renderLower() {
    fillText(`Lv.${player.genLevel}`, UI.battle.lower.textLevel)
    drawImage(img.icon.life, UI.battle.lower.iconLife)
    fillText(`${player.life}`, UI.battle.lower.textLife)
    drawImage(img.icon.energy, UI.battle.lower.iconEnergy)
    fillText(`${player.energy.toFixed(1)}/${player.energyMax}`, UI.battle.lower.textEnergy)

    context.fillStyle = 'Orange'
    context.fillRect(UI.battle.lower.energyBarStart[0], UI.battle.lower.energyBarStart[1], 20 * player.energy, 20)
    context.fillStyle = 'Black'
    context.strokeRect(UI.battle.lower.energyBarStart[0], UI.battle.lower.energyBarStart[1], 20 * player.energyMax, 20)

    strokeRect(UI.battle.lower.buttonUpgrade)
    fillText(`${player.genUpgrade}`, UI.battle.lower.textUpgrade)
    strokeRect(UI.battle.lower.handRect)
    strokeRect(UI.battle.lower.buttonCardBack)
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

function strokeRectCenter(rect) {
    context.strokeRect(rect.position.x - rect.size.x / 2, rect.position.y - rect.size.y / 2, rect.size.x, rect.size.y)
}

function drawImage(img, pos) {
    context.drawImage(img, pos[0], pos[1])
}
