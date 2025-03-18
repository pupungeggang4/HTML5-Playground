class GameHandler {
    constructor() {
        player = new Player()
        field = new Field()
    }

    handleTick() {
        player.handleTick()
    }
}