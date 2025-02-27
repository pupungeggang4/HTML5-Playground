class Game {
    constructor() {
        player = new Player()
        field = new Field()
    }

    handleFrame() {
        field.handleFrame()
    }
}
