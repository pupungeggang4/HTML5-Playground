class SceneMain {
    static loop(game) {
        game.a += 200 * game.delta / 1000
        game.ctx.fillStyle = 'Black'
        game.ctx.clearRect(0, 0, 1280, 800)
        game.ctx.fillRect(game.a, 0, 40, 40)
        game.ctx.fillText(game.delta, 4, 80)
    }
}