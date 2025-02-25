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
    
}

class Field {
    thingList = []

    constructor() {
        this.thingList = []
    }

    render() {
    }

    simpleRender() {
        player.simpleRender()
    }
}
