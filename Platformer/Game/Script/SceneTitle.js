function loopTitle() {
    renderTitle()
}

function renderTitle() {
    renderInit()
    fillText(`Platformer Game`, UI.title.textTitle)
    fillText(`Start Game`, UI.title.textStart)
    fillText(`Erase Data`, UI.title.textErase)
    strokeRect([UI.title.arrow[cursor.title][0], UI.title.arrow[cursor.title][1], 80, 80])
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 'e') {
                if (cursor.title === 0) {
                    scene = 'platformer'
                    state = ''
                }
            } else if (key === 'w') {
                cursor.title = (cursor.title + 1) % 2
            } else if (key === 's') {
                cursor.title = (cursor.title + 1) % 2
            }
        }
    }
}

function keyUpTitle(key) {

}
