function loopBattle() {
    if (menu === false) {
        if (state === '') {
            game.handleTickBattle()
        }
    }
    renderBattle()
}

function renderBattle() {
    renderInit()

    if (state === 'start' || state === 'start_confirm') {
        renderBattleStart()
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
                if (pointInsideRectUI(pos, UI.battle.start.buttonStart)) {
                    state = 'start_confirm'
                }
            } else if (state === 'start_confirm') {
                if (pointInsideRectUI(pos, UI.battle.start.buttonStart)) {
                    state = ''
                }
            }
            if (state === '') {

            }
        } else if (menu === true) {
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

function keyDownBattle(key) {

}

function keyUpBattle(key) {

}
