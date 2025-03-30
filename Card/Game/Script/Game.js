class GameManager {
    constructor() {
        player = new Player()
        playerField = new PlayerField()
        playerBattle = new PlayerBattle()
        battle = new Battle()
        field = new Field()
        camera = new Camera()
    }

    gameInit() {
        player.loadData()
        playerField.loadData(field)
    }

    handleTickField() {
        playerField.move(camera, field)
        playerField.monsterCollideHandle(field, battle)
    }

    handleTickBattle() {

    }

    battleStart() {
        battle.battleStart()
        playerBattle.battleStart(player)
    }

    save() {
        player.saveUpdate()
        playerField.saveUpdate()
        saveData()
    }
}

function shuffle(array) {
    let out = []
    while (array.length > 0) {
        let index = Math.floor(Math.random() * array.length)
        out.push(array.splice(index, 1)[0])
    }
    return out
}