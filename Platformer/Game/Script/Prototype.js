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
    constructor() {
        super()
        this.rect = new Rect2D(600, 200, 80, 80)
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
