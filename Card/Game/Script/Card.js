class Card {
    constructor(data) {
        let dataCopy = JSON.parse(JSON.stringify(data))

        this.ID = dataCopy['ID']
        this.type = dataCopy['type']
        this.element = dataCopy['element']
        this.crystal = dataCopy['crystal']
        this.attack = dataCopy['attack']
        this.hp = dataCopy['hp']
        this.play = dataCopy['play']
        this.property = dataCopy['property']
    }

    clone() {
        return new Card({'ID': this.ID, 'type': this.type, 'element': this.element, 'crystal': this.crystal, 'attack': this.attack, 'hp': this.hp, 'play': this.play, 'property': this.property})
    }
}

class Crystal {
    constructor(data) {
        let dataCopy = JSON.parse(JSON.stringify(data))

        this.ID = dataCopy['ID']
        this.element = dataCopy['element']
        this.play = dataCopy['play']
    }

    clone() {
        return new Crystal({'ID': this.ID, 'element': this.element, 'play': this.play})
    }
}