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

        window.addEventListener('keyup', () => this.keyUp(event), false)
        window.addEventListener('keydown', () => this.keyDown(event), false)

        this.scene = 'title'
        this.state = 'init'
        this.menu = false

        this.gameLoop = requestAnimationFrame(() => this.run())
    }

    run() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious

        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'platformer') {
            ScenePlatformer.loop(this)
        }

        this.gameloop = requestAnimationFrame(() => this.run())
    }

    keyDown(event) {
        let key = event.key

        if (this.state === 'init') {
            this.state = ''
        }

        if (this.scene === 'title') {
            SceneTitle.keyDown(this, key)
        } else if (this.scene === 'platformer') {
            ScenePlatformer.keyDown(this, key)
        }
    }

    keyUp(event) {

    }
}
