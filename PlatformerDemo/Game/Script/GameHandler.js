let game

class Game {
    constructor() {
        this.scene = 'title'
        this.state = 'init'
        this.menu = false

        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false
        }

        this.player = new Player()
        this.camera = new Vector2D(0, 0) 
        this.thing = []

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.frameCurrent = performance.now()
        this.framePrevious = 0
        this.delta = 0

        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)

        this.gameLoop = requestAnimationFrame(() => this.run())
    }

    loadField() {
        this.player = new Player()
        this.cameraAdjust()
        this.thing = [new Wall(120, 0, 240, 240), new Wall(400, 0, 240, 240), new WaterArea(-400, 0, 240, 240)]
    }

    cameraAdjust() {
        this.camera = this.player.rect.position.sub(new Vector2D(640, 400))
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

        if (key === 'a') {
            this.keyPressed['left'] = true
        }
        if (key === 'd') {
            this.keyPressed['right'] = true
        }
        if (key === 'w') {
            this.keyPressed['up'] = true
        }
        if (key === 's') {
            this.keyPressed['down'] = true
        }

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
        let key = event.key

        if (key === 'a') {
            this.keyPressed['left'] = false
        }
        if (key === 'd') {
            this.keyPressed['right'] = false
        }
        if (key === 'w') {
            this.keyPressed['up'] = false
        }
        if (key === 's') {
            this.keyPressed['down'] = false
        }
    }
}
