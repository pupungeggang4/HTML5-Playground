class GameHandler {
    constructor() {
        player = new Player()
        field = new Field()
    }

    battleStart() {
        field.battleStart()
    }

    handleTick() {
        player.handleTick()
        field.handleTick()
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