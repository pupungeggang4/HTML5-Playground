class GameManager {
    constructor() {
        camera = new Camera()
        player = new Player()
        field = new Field()
    }

    handleFrame() {
        player.move()
    }
}
