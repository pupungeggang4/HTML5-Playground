class FieldElement {
    constructor() {

    }
}

class PlayerField extends FieldElement {
    constructor() {       
        super()
        this.rect = new Rect2D(0, 0, 80, 80)
        this.speed = 320
        this.place = 'home_town'
    }

    loadData(field) {
        this.place = save.place
        field.loadField(dataField[this.place])
        this.rect.position.x = 640
        this.rect.position.y = 640
    }

    move(camera) {
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

        camera.x = this.rect.position.x - 640
        camera.y = this.rect.position.y - 400
    }

    interact(field) {
        for (let i = 0; i < field.thing.length; i++) {
            let thing = field.thing[i]
            if (this.rect.position.distance(thing.rect.position) < 80) {
                if (thing instanceof SaveField) {
                    state = 'save_confirm'
                }
            }
        }
    }

    moveField(field, player) {
        for (let i = 0; i < field.connection.length; i++) {
            if (this.rect.position.distance(field.connection[i].rect.position) < 80) {
                let dPlace = field.connection[i].destination
                let dPosition = field.connection[i].dPosition
                this.rect.position = new Vector2D(dPosition.x, dPosition.y)
                this.place = dPlace
                field.loadField(dataField[dPlace])
                if (player.adventure === false && field.village === false) {
                    player.adventureInit()
                } else if (player.adventure === true && field.village === true) {
                    player.adventureEnd()
                }
            }
        }
    }
}

class MonsterField extends FieldElement {
    constructor(rect) {
        super()
        this.rect = rect
    }

    render() {
        strokeRectCamera(this.rect, camera)
    }
}

class BossField extends FieldElement {

}

class SaveField extends FieldElement {
    constructor(rect) {
        super()
        this.rect = rect
    }

    render() {
        strokeRectCamera(this.rect, camera)
    }
}

class ConnectionField extends FieldElement {
    constructor(rect, destination, dPosition, villageToggle) {
        super()
        this.rect = rect
        this.villageToggle = villageToggle
        this.destination = destination
        this.dPosition = dPosition
    }

    render() {
        if (this.villageToggle === false) {
            drawImageCamera(this.rect, camera, img.portal)
        } else {
            drawImageCamera(this.rect, camera, img.portalToggle)
        }
    }
}

class Field {
    thingSize = 80

    loadField(data) {
        let dataCopy = JSON.parse(JSON.stringify(data))
        this.size = new Vector2D(dataCopy['size'][0], dataCopy['size'][1])
        this.village = dataCopy['village']
        this.connection = []

        for (let i = 0; i < dataCopy['connection'].length; i++) {
            let rect = new Rect2D(dataCopy['connection'][i][0][0], dataCopy['connection'][i][0][1], this.thingSize, this.thingSize)
            let vector = new Vector2D(dataCopy['connection'][i][2][0], dataCopy['connection'][i][2][1])
            this.connection.push(new ConnectionField(rect, data['connection'][i][1], vector, data['connection'][i][3]))
        }

        this.thing = []

        for (let i = 0; i < dataCopy['thing'].length; i++) {
            let rect = new Rect2D(dataCopy['thing'][i]['position'][0], dataCopy['thing'][i]['position'][1], this.thingSize, this.thingSize)
            if (dataCopy['thing'][i]['type'] == 'save') {
                this.thing.push(new SaveField(rect))
            }
        }

        this.monster_spawn = dataCopy['monster_spawn']
        this.monster = []

        if (this.village === false) {
            for (let i = 0; i < 3; i++) {
                let index = Math.floor(Math.random() * this.monster_spawn.length)
                let spawn = this.monster_spawn.splice(index, 1)[0]
                let rect = new Rect2D(spawn[0], spawn[1], this.thingSize, this.thingSize)
                this.monster.push(new MonsterField(rect))
            }
        }
    }

    monsterCollideHandle(playerField) {
        for (let i = 0; i < this.monster.length; i++) {
            let monster = this.monster[i]
            if (playerField.rect.position.distance(monster.rect.position) < 80) {
                scene = 'battle'
                state = 'start'
                this.monster.splice(i, 1)
            }
        }
    }

    render() {
        for (let i = 0; i < this.connection.length; i++) {
            this.connection[i].render()
        }

        for (let i = 0; i < this.thing.length; i++) {
            this.thing[i].render()
        }

        for (let i = 0; i < this.monster.length; i++) {
            this.monster[i].render()
        }

        strokeRectCamera(playerField.rect, camera)
    }
}

class Camera {
    constructor() {
        this.x = 0
        this.y = 0
    }
}