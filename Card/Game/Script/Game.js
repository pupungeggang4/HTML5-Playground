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
