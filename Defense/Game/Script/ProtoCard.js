class Card {
    ID = 1
    energy = 1
    type = 'unit'
    attack = 0
    attackSpeed = 0
    moveStyle = 'stop'
    hp = 0
    speed = 0
    weapon = 0
    play = []

    constructor(data) {
        let dataCopy = JSON.parse(JSON.stringify(data))
        this.ID = dataCopy['ID']
        this.energy = dataCopy['energy']
        this.type = dataCopy['type']
        this.attack = dataCopy['attack']
        this.attackSpeed = dataCopy['attackSpeed']
        this.weapon = dataCopy['weapon']
        this.hp = dataCopy['hp']
        this.speed = dataCopy['speed']
        this.moveStyle = dataCopy['move_style']
        this.play = dataCopy['play']
    }

    render(pos) {
        context.fillStyle = 'White'
        context.fillRect(pos[0], pos[1], 80, 80)
        context.strokeRect(pos[0], pos[1], 80, 80)
        context.fillStyle = 'Black'

        context.fillText(`${this.energy}`, pos[0] + UI.card.textEnergy[0], pos[1] + UI.card.textEnergy[1])
    }
}