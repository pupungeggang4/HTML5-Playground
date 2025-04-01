let game

class Game {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.frameCurrent = performance.now()
        this.framePrevious = 0
        window.addEventListener('keyup', this.keyUp, false)
        window.addEventListener('keydown', this.keyDown, false)

        this.scene = 'main'
        this.state = 'init'
    }

    loop() {
        console.log(this.frameCurrent)
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious

        if (this.scene === 'main') {
            SceneMain.loop(this)
        }

        this.gameLoop = requestAnimationFrame(this.loop)
    }

    keyDown(event) {

    }

    keyUp(event) {

    }
}