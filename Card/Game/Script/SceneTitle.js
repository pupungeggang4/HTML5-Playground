function loopTitle() {
    renderTitle()
}

function renderTitle() {
    renderInit()
}

function mouseUpTitle(pos, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                scene = 'Card'
                state = ''
                tempObj = new Card()
            }
        }
    }
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            scene = 'Card'
            state = ''
            tempObj = new Card()
        }
    }
}
