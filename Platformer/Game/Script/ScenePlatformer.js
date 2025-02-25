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

}

function keyUpPlatformer(key) {

}
