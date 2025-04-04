class Player {
    constructor() {
        this.rect = new Rect2D(0, 0, 80, 80)
        this.speed = 320
    }

    move(game) {
        if (game.keyPressed['left'] === true) {
            this.rect.position.x -= this.speed * game.delta / 1000
        }

        if (game.keyPressed['right'] === true) {
            this.rect.position.x += this.speed * game.delta / 1000
        }
    }

    render(game) {
        Render.renderRect(game, this.rect.translatedRect(game.camera.minus()))
    }
}
