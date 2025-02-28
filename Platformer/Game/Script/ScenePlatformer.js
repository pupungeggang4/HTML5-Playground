function loopPlatformer() {
    if (menu === false) {
        if (state === '') {
            game.handleFrame()
        }
    }
    renderPlatformer()
}

function renderPlatformer() {
    renderInit()
    field.simpleRender()
}

function keyDownPlatformer(key) {
    if (menu === false) {
        if (state === '') {
            if (key === ' ') {
                player.jump()
            }
        }
    }
}

function keyUpPlatformer(key) {

}
