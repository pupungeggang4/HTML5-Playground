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

    cloneToCardBattle() {
        return new CardBattle(this.data)
    }

    render(pos) {
        context.strokeRect(pos[0], pos[1], UI.card.rect[2], UI.card.rect[3])

        for (let i = 0; i < this.crystal.length; i++) {
            context.strokeRect(pos[0] + UI.card.crystalImage[i][0], pos[1] + UI.card.crystalImage[i][1], 40, 40)
        }

        context.strokeRect(pos[0] + UI.card.image[0], pos[1] + UI.card.image[1], UI.card.image[2], UI.card.image[3])
    }
}

class CardBattle extends Card {
    constructor(data) {
        super(data)
        this.crystalSlot = []
        for (let i = 0; i < this.crystal.length; i++) {
            this.crystalSlot.push([this.crystal[i], false])
        }
    }

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
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