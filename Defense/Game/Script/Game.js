class GameHandler {
    constructor() {
        player = new Player()
        field = new Field()
    }

    battleStart() {
        player.battleStart()
        field.battleStart()
    }

    handleTick() {
        player.handleTick()
        field.handleTick()
    }

    handleMouseUp(pos, button) {
        if (clickState === '') {
            if (pointInsideRectUI(pos, UI.battle.lower.buttonUpgrade)) {
                player.upgrade()
            }

            for (let i = 0; i < player.hand.length; i++) {
                let rect = [UI.battle.lower.hand[0] + UI.battle.lower.handInterval[0] * i, UI.battle.lower.hand[1], UI.card.size[0], UI.card.size[1]]
                if (pointInsideRectUI(pos, rect)) {
                    player.selectedIndex = i
                    clickState = 'card'
                }
            }
        } else if (clickState === 'card') {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 10; j++) {
                    let tempRect = new Rect2D(280 + j * 80, 280 + i * 80, 80, 80)
                    if (pos.insideRect(tempRect)) {
                        console.log(`${i}, ${j}`)
                        player.playCard(i, j, field)
                        clickState = ''
                    }
                }
            }
        }
    }
}

function sampleList(l, num) {
    let out = []
    let ld = JSON.parse(JSON.stringify(l))
    for (let i = 0; i < num; i++) {
        let index = Math.floor(Math.random() * ld.length)
        out.push(ld.splice(index, 1)[0])
    }
    return out
}