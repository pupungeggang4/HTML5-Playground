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
                scene = 'Battle'
                state = ''
                battleInit() 
            }
        }
    }
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            scene = 'Battle'
            state = ''
            battleInit()
        }
    }
}
