class ScenePlatformer {
    static loop(game) {
        if (game.state === '') {
            game.player.move(game)
            game.cameraAdjust()
        }
        this.display(game)
    }

    static display(game) {
        Render.init(game)
        for (let thing in game.thing) {
            game.thing[thing].render(game)
        }
        game.player.render(game)
    }

    static keyDown(game, key) {
        if (game.menu === false) {
            if (key === 'Enter') {
                game.state = ''
            } else if (game.state === '') {
                if (key === 'r') {
                    game.loadField()
                }
            }
        }
    }

    static keyUp(game, key) {

    }
}
