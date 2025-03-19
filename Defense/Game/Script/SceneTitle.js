function loopTitle() {
    renderTitle()
}

function renderTitle() {
    renderInit()
    fillText('Defense', UI.title.textTitle)
    strokeRect(UI.title.buttonStart)
    fillText('Start Game', UI.title.textStart)
    strokeRect(UI.title.buttonErase)
    fillText('Erase Data', UI.title.textErase)
}

function mouseUpTitle(pos, button) {
    if (button === 0) {
        if (state === '') {
            if (pointInsideRectUI(pos, UI.title.buttonStart)) {
                scene = 'battle'
                state = 'start'
                game.battleStart()
            }
        }
    }
}