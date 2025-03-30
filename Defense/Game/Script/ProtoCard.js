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
        this.data = JSON.parse(JSON.stringify(data))
        this.ID = this.data['ID']
        this.energy = this.data['energy']
        this.type = this.data['type']
        this.attack = this.data['attack']
        this.attackSpeed = this.data['attack_speed']
        this.weapon = this.data['weapon']
        this.hp = this.data['hp']
        this.speed = this.data['speed']
        this.moveStyle = this.data['move_style']
        this.play = this.data['play']
    }

    clone() {
        return new Card(this.data)
    }

    render(pos) {
        context.fillStyle = 'White'
        context.fillRect(pos[0], pos[1], 80, 80)
        context.strokeRect(pos[0], pos[1], 80, 80)
        context.fillStyle = 'Black'

        context.fillText(`${this.energy}`, pos[0] + UI.card.textEnergy[0], pos[1] + UI.card.textEnergy[1])
    }
}