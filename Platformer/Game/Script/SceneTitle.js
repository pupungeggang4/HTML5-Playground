function loopTitle() {
    renderTitle()
}

function renderTitle() {
    renderInit()
    fillText(`Platformer Game`, UI.title.textTitle)
    fillText(`Start Game`, UI.title.textStart)
    fillText(`Erase Data`, UI.title.textErase)
    strokeRect([UI.title.arrow[0][0], UI.title.arrow[0][1], 80, 80])
}

function keyDownTitle(key) {

}

function keyUpTitle() {

}
