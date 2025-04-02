class Render {
    static init(game) {
        game.ctx.font = '32px neodgm'
        game.ctx.textAlign = 'left'
        game.ctx.textBaseline = 'top'
        game.ctx.strokeStyle = 'Black'
        game.ctx.lineWidth = 2
        game.ctx.fillStyle = 'White'
        game.ctx.clearRect(0, 0, 1280, 800)
        game.ctx.fillRect(0, 0, 1280, 800)
        game.ctx.fillStyle = 'Black'
    }
}