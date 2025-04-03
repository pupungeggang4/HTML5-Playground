class ScenePlatformer {
    static loop(game) {
        game.player.move(game)
        this.display(game)
    }

    static display(game) {
        Render.init(game)
        game.player.render(game)
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }
}
