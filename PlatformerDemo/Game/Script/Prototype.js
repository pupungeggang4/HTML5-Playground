class Thing {
    constructor() {

    }
}

class Wall extends Thing {
    constructor(x, y, w, h) {
        super()
        this.rect = new Rect2D(x, y, w, h)
    }

    render(game) {
        Render.renderRect(game, this.rect.translatedRect(game.camera.minus()))
    }
}

class Platform extends Thing {

}

class WaterArea extends Thing {
    constructor(x, y, w, h) {
        super()
        this.rect = new Rect2D(x, y, w, h)
    }

    render(game) {
        game.ctx.fillStyle = 'Cyan'
        Render.renderRectFill(game, this.rect.translatedRect(game.camera.minus()))
        game.ctx.fillStyle = 'Black'
    }
}

class Tile extends Thing {

}

class TileMap extends Thing {

}