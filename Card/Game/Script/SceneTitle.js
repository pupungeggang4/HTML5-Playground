function loopTitle() {
    renderTitle()
}

function renderTitle() {
    renderInit()
    fillText('Card Game', UI.title.textTitle)
    strokeRect(UI.title.buttonStart)
    fillText('Start Game [E]', UI.title.textStart)
    strokeRect(UI.title.buttonErase)
    fillText('Erase data [Q]', UI.title.textErase)
}

function mouseUpTitle(pos, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectUI(pos, UI.title.buttonStart)) {
                    scene = 'field'
                    state = ''
                    game.adventureInit()
                }
            }
        }
    }
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 'e') {
                scene = 'field'
                state = ''
                game.adventureInit()
            } else if (key === 'q') {
                eraseData()
            }
        }
    }
}

function keyUpTitle(key) {

}
