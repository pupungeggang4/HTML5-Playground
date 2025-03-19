function loopBattle() {
    if (menu === false) {
        if (state === '') {
            game.handleTick()
        }
    }
    renderBattle()
}

function renderBattle() {
    renderInit()
    renderLower()
    field.render()

    if (state === 'start') {
        renderStart()
    }

    if (menu === true) {
        renderMenu()
    }

    strokeRect(UI.battle.buttonMenu)
}

function mouseUpBattle(pos, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                menu = true
            }

            if (state === 'start') {
                if (pointInsideRectUI(pos, UI.battle.start.buttonStart)) {
                    state = ''
                }
            }
            
            if (state === '') {
                if (pointInsideRectUI(pos, UI.battle.lower.buttonUpgrade)) {
                    player.upgrade()
                }
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
