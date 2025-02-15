class Field {
    thingList = []

    constructor() {
        this.thingList = [new Platform()]
    }

    render() {
        for (let i = 0; i < this.thingList.length; i++) {
            this.thingList[i].render()
        }
    }
}

class Thing {
    position = null
    size = null

    constructor() {
    }

    render() {
        fieldContext.strokeRect(this.position.x - this.size.x / 2, this.position.y - this.size.y / 2, this.size.x, this.size.y)
    }
}

class Player extends Thing {
    constructor() {
        super()
        this.position = new Vector2D(100, 100)
        this.size = new Vector2D(80, 80)
    }

    render() {
        fieldContext.fillRect(this.position.x - this.size.x / 2, this.position.y - this.size.y / 2, this.size.x, this.size.y)
    }
}

class Platform extends Thing {
    constructor() {
        super()
        this.position = new Vector2D(300, 300)
        this.size = new Vector2D(80, 40)
    }
}
