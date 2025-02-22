class Player {
    constructor() {
        this.level = 1
        this.exp = 0
        this.gold = 50
        this.card = []
        this.equipment = []
        this.startDeck = []
    }

    reset() {
        
    }

    dataLoad() {
    }
}

class FieldElement {
    constructor() {

    }
}

class PlayerField extends FieldElement {
    constructor() {       
        super()
        this.rect = new Rect2D(0, 0, 80, 80)
        this.speed = 320
    }

    move() {
        if (keyPress['left'] === true) {
            this.rect.position.x -= this.speed * delta / 1000
        }
        if (keyPress['right'] === true) {
            this.rect.position.x += this.speed * delta / 1000
        }
        if (keyPress['up'] === true) {
            this.rect.position.y -= this.speed * delta / 1000
        }
        if (keyPress['down'] === true) {
            this.rect.position.y += this.speed * delta / 1000
        }
    }
}

class EnemyField extends FieldElement {

}

class BossField extends FieldElement {

}

class Field {
    loadField(data) {
        this.size = new Vector2D(data['size'][0], data['size'][1])
        this.village = data['village']

        this.connection = data['connection']
        this.monster_spawn = data['monster_spawn']
        this.thing = data['thing']
        this.monster = []

        this.camera = new Vector2D(0, 0)
    }

    render() {
        strokeRectCamera(playerField.rect, this.camera)
    }
}

class Battle {
    
}

class Thing {

}

class EmptyUnit extends Thing {

}

class Unit extends Thing {

}
