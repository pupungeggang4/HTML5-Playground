function loopTitle() {
    renderTitle()
}

function renderTitle() {
    renderInit()
    fillText('Puzzle', UI.title.textTitle)
    strokeRect(UI.title.buttonStart)
    fillText('Start Game', UI.title.textStart)
    strokeRect(UI.title.buttonErase)
    fillText('Erase Data', UI.title.textErase)
}

function keyDownTitle(key) {

}

function mouseUpTitle(pos, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectUI(pos, UI.title.buttonStart)) {
                    scene = 'levelselect'
                    state = ''
                }
            }
        }
    }
}
