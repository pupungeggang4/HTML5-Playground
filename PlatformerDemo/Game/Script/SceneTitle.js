class SceneTitle {
    static loop(game) {
        this.display(game)
    }

    static display(game) {
        Render.init(game)
        Render.fillText(game, 'Platformer Demo', UI.title.textTitle)
        game.ctx.textAlign = 'center'
        Render.fillText(game, 'Press Enter to Start', UI.title.textStart)
    }

    static keyDown(game, key) {
        if (key === 'Enter') {
            game.scene = 'platformer'
            game.state = 'start'
            game.loadField()
        }
    }
}
