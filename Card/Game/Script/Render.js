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
    fillText('Resume [R]', UI.menu.textResume)
    strokeRect(UI.menu.buttonExit)
    fillText('Exit to title [E]', UI.menu.textExit)
}

function renderInfo() {
    context.fillStyle = 'White'
    fillRect(UI.info.rect)
    strokeRect(UI.info.rect)
    context.fillStyle = 'Black'

    strokeRect(UI.info.buttonClose)
    strokeRect(UI.info.buttonProfile)
    strokeRect(UI.info.buttonTree)
    strokeRect(UI.info.buttonDeckOriginal)
    strokeRect(UI.info.buttonDeck)
    strokeRect(UI.info.buttonCrystal)
    strokeRect(UI.info.buttonEquipment)
    strokeRect(UI.info.buttonMap)

    if (infoRenderMode === 'profile') {
        strokeRect(UI.info.profile.profileImage)
        fillText(`Lv.${player.level}`, UI.info.profile.textLevel)
        fillText(`Exp:${player.exp}/${player.expMax}`, UI.info.profile.textExp)
        fillText(`${player.gold}`, UI.info.profile.textGold)
    }
}

function renderSaveWindow() {
    context.fillStyle = 'White'
    fillRect(UI.saveWindow.rect)
    strokeRect(UI.saveWindow.rect)
    context.fillStyle = 'Black'

    fillText(`Save data?`, UI.saveWindow.textTitle)
    strokeRect(UI.saveWindow.buttonYes)
    fillText(`Yes [Y]`, UI.saveWindow.textYes)
    strokeRect(UI.saveWindow.buttonNo)
    fillText(`No [N]`, UI.saveWindow.textNo)
}

function renderBattleStart() {
    context.fillStyle = 'White'
    fillRect(UI.battle.start.rect)
    strokeRect(UI.battle.start.rect)
    context.fillStyle = 'Black'

    if (state === 'start') {
        fillText('Select start card', UI.battle.start.textTitle)
    } else if (state === 'start_confirm') {
        fillText('Confirm', UI.battle.start.textTitle)
    }
    
    strokeRect(UI.battle.start.buttonStart)
    fillText('Start', UI.battle.start.textStart)
}

function strokeRect(rect) {
    context.strokeRect(rect[0], rect[1], rect[2], rect[3])
}

function fillRect(rect) {
    context.fillRect(rect[0], rect[1], rect[2], rect[3])
}

function strokeRectCamera(rect, camera) {
    context.strokeRect(rect.position.x - rect.size.x / 2 - camera.x, rect.position.y - rect.size.y / 2 - camera.y, rect.size.x, rect.size.y)
}

function drawImageCamera(rect, camera, img) {
    context.drawImage(img, rect.position.x - rect.size.x / 2 - camera.x, rect.position.y - rect.size.y / 2- camera.y, rect.size.x, rect.size.y)
}

function fillText(text, pos) {
    context.fillText(text, pos[0], pos[1])
}
