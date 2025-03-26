class Card {
    constructor(data) {
        this.data = JSON.parse(JSON.stringify(data))
        this.ID = this.data['ID']
        this.type = this.data['type']
        this.element = this.data['element']
        this.crystal = this.data['crystal']
        this.attack = this.data['attack']
        this.hp = this.data['hp']
        this.play = this.data['play']
        this.property = this.data['property']
    }

    clone() {
        return new Card(this.data)
    }
}

class Crystal {
    constructor(data) {
        this.data = JSON.parse(JSON.stringify(data))
        this.ID = this.data['ID']
        this.element = this.data['element']
        this.play = this.data['play']
    }

    clone() {
        return new Crystal(this.data)
    }
}