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
    strokeRect(UI.field.buttonInteract)
    strokeRect(UI.field.buttonInfo)

    if (state === 'info') {
        renderInfo()
    }

    if (state === 'save_confirm') {
        renderSaveWindow()
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
                if (pointInsideRectUI(pos, UI.field.buttonInfo)) {
                    state = 'info'
                    infoRenderMode = 'profile'
                } else if (pointInsideRectUI(pos, UI.field.buttonInteract)) {
                    playerField.interact(field)
                    playerField.moveField(field, player)
                }
            } else if (state === 'info') {
                if (pointInsideRectUI(pos, UI.info.buttonClose)) {
                    state = ''
                }
            } else if (state === 'save_confirm') {
                if (pointInsideRectUI(pos, UI.saveWindow.buttonYes)) {
                    saveData()
                    state = ''
                } else if (pointInsideRectUI(pos, UI.saveWindow.buttonNo)) {
                    state = ''
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

function keyDownField(key) {
    if (menu === false) {
        if (key === 'Escape') {
            menu = true
        }
        if (state === '') {
            if (key === 'i') {
                state = 'info'
                infoRenderMode = 'profile'
            } else if (key === 'e') {
                playerField.interact(field)
                playerField.moveField(field, player)
            }
        } else if (state === 'info') {
            if (key === 'i') {
                state = ''
            }
        } else if (state === 'save_confirm') {
            if (key === 'y') {
                state = ''
                saveData()
            } else if (key === 'n') {
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
