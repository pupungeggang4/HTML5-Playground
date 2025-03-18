function loopBattle() {
    renderBattle()
}

function renderBattle() {
    renderInit()

    if (state === 'start') {
        renderStart()
    }

    if (menu === true) {
        renderMenu()
    }
}

function mouseUpBattle(pos, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                menu = true
            }

            if (state === 'start') {

            }
            
            if (state === '') {

            }
        }
    }
}
