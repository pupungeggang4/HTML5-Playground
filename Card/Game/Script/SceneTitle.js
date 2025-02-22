function loopTitle() {
    renderTitle()
}

function renderTitle() {
    renderInit()
    fillText('Card Game', UI.title.textTitle)
    strokeRect(UI.title.buttonStart)
    fillText('Start Game', UI.title.textStart)
    strokeRect(UI.title.buttonErase)
    fillText('Erase data', UI.title.textErase)
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

}

function keyUpTitle(key) {

}
