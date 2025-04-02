class SceneMain {
    static loop(game) {
        this.display(game)
    }

    static display(game) {
        Render.init(game)
        game.ctx.fillRect(0, 0, 40, 40)
    }
}