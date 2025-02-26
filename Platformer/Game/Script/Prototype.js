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
}

class Player extends Thing {
    speed = 200.0
    velocity = 0

    constructor() {
        super()
        this.rect = new Rect2D(600, 200, 80, 80)
        this.velocity = new Vector2D(0, 0)
    }

    move() {
        this.velocity.x = 0
        this.velocity.y = 0

        if (keyPress['left'] === true) {
            this.velocity.x -= this.speed
        }
        if (keyPress['right'] === true) {
            this.velocity.x += this.speed
        }

        this.rect.position.x += this.velocity.x * delta / 1000
    }
}

class Platform extends Thing {
    constructor(rectVar) {
        super()
        this.rect = new Rect2D(rectVar[0], rectVar[1], rectVar[2], rectVar[3])
    }
}

class Field {
    thingList = []

    constructor() {
        this.thingList = [new Platform([800, 200, 160, 40]), new Platform([160, 200, 160, 40])]
    }

    render() {
    }

    simpleRender() {
        for (let i = 0; i < this.thingList.length; i++) {
            this.thingList[i].simpleRender()
        }
        player.simpleRender()
    }
}
