let game

class Game {
    frameCurrent = 0
    framePrevious = 0

    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.frameCurrent = performance.now()
        this.framePrevious = 0
        this.delta = 0

        window.addEventListener('keyup', this.keyUp, false)
        window.addEventListener('keydown', this.keyDown, false)

        this.scene = 'main'
        this.state = 'init'

        this.a = 0
        this.gameLoop = requestAnimationFrame(() => this.run())
    }

    run() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious

        if (this.scene === 'main') {
            SceneMain.loop(this)
        }

        this.gameloop = requestAnimationFrame(() => this.run())
    }

    keyDown(event) {
        console.log(event.key)
    }

    keyUp(event) {

    }
}