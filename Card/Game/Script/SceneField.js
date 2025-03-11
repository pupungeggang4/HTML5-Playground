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

    if (menu === true) {
        renderMenu()
    }
}

function mouseUpField(pos, button) {

}

function keyDownField(key) {
    if (menu === false) {
        if (key === 'Escape') {
            menu = true
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
