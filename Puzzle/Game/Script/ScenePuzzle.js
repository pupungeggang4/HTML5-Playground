function loopPuzzle() {
    renderPuzzle()
}

function renderPuzzle() {
    renderInit()

    field.render()

    if (menu === true) {
        renderMenu()
    }

    strokeRect(UI.puzzle.buttonMenu)
}

function keyUpPuzzle(key) {
    
}

function keyDownPuzzle(key) {

}

function mouseUpPuzzle(pos, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectUI(pos, UI.puzzle.buttonMenu)) {
                menu = true
            }
            if (state === '') {
            }
        } else if (menu == true) {
            if (pointInsideRectUI(pos, UI.menu.buttonResume)) {
                menu = false
            } else if (pointInsideRectUI(pos, UI.menu.buttonExit)) {
                menu = false
                scene = 'title'
                state = ''
            }
        }
    }
}