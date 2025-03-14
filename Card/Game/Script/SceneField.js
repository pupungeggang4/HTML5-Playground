function loopField() {
    if (menu === false) {
        if (state === '') {
            game.handleTickField()
        }
    }

    renderField()
}

function renderField() {
    renderInit()
    field.render()

    strokeRect(UI.field.buttonMenu)
    fillText('[WASD] Move [I] Inventory [E] Move/Interact [Esc] Menu', UI.field.textHelp)

    if (state === 'info') {
        renderInfo()
    }

    if (menu === true) {
        renderMenu()
    }
}

function mouseUpField(pos, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectUI(pos, UI.field.buttonMenu)) {
                menu = true
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

function keyDownField(key) {
    if (menu === false) {
        if (key === 'Escape') {
            menu = true
        }
        if (state === '') {
            if (key === 'i') {
                state = 'info'
            }
        } else if (state === 'info') {
            if (key === 'i') {
                state = ''
            }
        }
    } else if (menu === true) {
        if (key === 'Escape') {
            menu = false
        } else if (key === 'r') {
            menu = false
        } else if (key === 'e') {
            menu = false
            scene = 'title'
            state = ''
        }
    }
}

function keyUpField(key) {

}
