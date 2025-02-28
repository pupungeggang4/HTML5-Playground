class Thing {
    rect = null
    
    constructor() {
    }

    simpleRender() {
        strokeRectCenter(this.rect, camera)
    }
}

class Camera {
    constructor() {
        this.position = new Vector2D(0, 0)
    }

    followTarget(target) {
        this.position.x = target.rect.position.x - 640
        this.position.y = target.rect.position.y - 400
    }
}

class Player extends Thing {
    speed = 200.0
    terminalSpeed = 800.0
    gAcceler = 1600.0

    jumpPower = -1000.0
    jumpNum = 0
    ground = false
    velocity = 0

    constructor() {
        super()
        this.rect = new Rect2D(640, 3260, 80, 80)
        this.velocity = new Vector2D(0, 0)
    }

    jump() {
        if (this.jumpNum > 0 && this.ground == true) {
            this.velocity.y = this.jumpPower
            this.jumpNum -= 1
        }
    }

    move() {
        this.ground = false
        this.velocity.x = 0
        //this.velocity.y = 0

        if (keyPress['left'] === true) {
            this.velocity.x -= this.speed
        }
        if (keyPress['right'] === true) {
            this.velocity.x += this.speed
        }

        this.velocity.y += this.gAcceler * delta / 1000

        if (this.velocity.y >= this.terminalSpeed) {
            this.velocity.y = this.terminalSpeed
        }

        this.rect.position.x += this.velocity.x * delta / 1000
        this.rect.position.y += this.velocity.y * delta / 1000
    }

    handleTick() {
        this.move()
    }
}

class Wall extends Thing {
    constructor(rectVar) {
        super()
        this.rect = new Rect2D(rectVar[0], rectVar[1], rectVar[2], rectVar[3])
    }

    collideHandle(player) {
        let vc = vCollideCheck(player.rect, this.rect)
        if (vc != 0) {
            player.rect.position.y -= vc
            player.velocity.y = 0
            if (vc > 0) {
                player.ground = true
                player.jumpNum = 1
            }
        }
    }

    handleTick() {
        this.collideHandle(player)
    }
}

class Platform extends Thing {
    speed = 200.0
    path = []
    pathNext = 0
    supportingPlayer = false

    constructor(rectVar, path) {
        super()
        this.rect = new Rect2D(rectVar[0], rectVar[1], rectVar[2], rectVar[3])

        for (let i = 0; i < path.length; i++) {
            this.path.push(new Vector2D(path[i][0], path[i][1]))
        }
    }

    move(player) {
        let diff = this.path[this.pathNext].sub(this.rect.position)
        if (diff.getNorm() < 5) {
            this.rect.position = new Vector2D(this.path[this.pathNext].x, this.path[this.pathNext].y)
            this.pathNext = (this.pathNext + 1) % this.path.length
        } else {
            let diffNormalized = diff.normalize()
            this.rect.position.x += this.speed * diffNormalized.x * delta / 1000
            this.rect.position.y += this.speed * diffNormalized.y * delta / 1000

            if (this.supportingPlayer === true) {
                player.rect.position.x += this.speed * diffNormalized.x * delta / 1000
                player.rect.position.y += this.speed * diffNormalized.y * delta / 1000
            }
        }
    }

    support(player) {
        this.supportingPlayer = false
        let vc = vCollideCheck(player.rect, this.rect)
        if (vc > 0) {
            player.rect.position.y -= vc
            if (player.velocity.y > 0) {
                player.velocity.y = 0
            }
            this.supportingPlayer = true
            player.ground = true
            player.jumpNum = 1
        }
    }

    handleTick() {
        this.support(player)
        this.move(player)
    }

    simpleRender() {
        strokeRectCenter(this.rect, camera)
        context.beginPath()

        context.moveTo(this.path[0].x - camera.position.x, this.path[0].y - camera.position.y)

        for (let i = 0; i < this.path.length; i++) {
            context.lineTo(this.path[i].x - camera.position.x, this.path[i].y - camera.position.y)
        }

        context.closePath()
        context.stroke()
    }
}

class Field {
    thingList = []

    constructor() {
        this.thingList = [new Wall([640, 3500, 800, 200]), new Platform([320, 3200, 160, 40], [[320, 3200], [960, 3200]]), new Platform([960, 3000, 160, 40], [[960, 3000], [320, 3000]]), new Platform([320, 2800, 160, 40], [[320, 2800], [960, 2800]]), new Platform([960, 2600, 160, 40], [[960, 2600], [320, 2400]])]
    }

    render() {
    }

    simpleRender() {
        for (let i = 0; i < this.thingList.length; i++) {
            this.thingList[i].simpleRender()
        }
        player.simpleRender()
    }

    handleTick() {
        for (let i = 0; i < this.thingList.length; i++) {
            this.thingList[i].handleTick()
        }
    }
}
