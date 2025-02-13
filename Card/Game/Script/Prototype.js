class Card {
    energy = []
    attack = 0
    hp = 0

    constructor() {
        this.energy = []
        this.attack = 1
        this.hp = 2
    }

    render(pos) {
        context.fillStyle = 'White'
        context.fillRect(pos.x, pos.y, UI.card.size[0], UI.card.size[1])
        context.fillStyle = 'Black'
        context.strokeRect(pos.x, pos.y, UI.card.size[0], UI.card.size[1])
        context.strokeRect(pos.x + UI.card.img[0], pos.y + UI.card.img[1], UI.card.img[2], UI.card.img[3])
    }
}

class Unit {
}
