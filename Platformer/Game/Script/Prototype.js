class Thing {
    rect = null
    
    constructor() {

    }

    simpleRender() {
        strokeRect()
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
        
    }
}
