function loopLevelSelect() {
    renderLevelSelect()
}

function renderLevelSelect() {
    renderInit()
    fillText(`Select Level`, UI.levelSelect.textTitle)
    strokeRect(UI.levelSelect.buttonBack)
    strokeRect(UI.levelSelect.buttonPrev)
    strokeRect(UI.levelSelect.buttonNext)

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            let rect = [UI.levelSelect.levelStart[0] + j * UI.levelSelect.levelInterval[0], UI.levelSelect.levelStart[1] + i * UI.levelSelect.levelInterval[1], UI.levelSelect.levelSize[0], UI.levelSelect.levelSize[1]]
            strokeRect(rect)
        }
    }
}

function keyUpLevelSelect(key) {
    
}

function keyDownLevelSelect(key) {

}

function mouseUpLevelSelect(pos, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectUI(pos, UI.levelSelect.buttonBack)) {
                    scene = 'title'
                    state = ''
                }
            }
        }
    }
}
