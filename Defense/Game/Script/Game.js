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
    }
}