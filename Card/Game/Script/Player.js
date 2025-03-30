class Player {
    constructor() {
        this.level = 1
        this.exp = 0
        this.expMax = 100
        this.gold = 50
        this.card = []
        this.equipment = []
        this.startDeck = []
        this.adventure = false

        this.deck = []
        this.crystal = []

        this.fatigue = 0
    }

    adventureInit() {
        this.adventure = true
        this.deck = []
        this.crystal = []

        for (let i = 0; i < dataDeck[1]['card'].length; i++) {
            this.deck.push(new Card(dataCard[dataDeck[1]['card'][i]]))
        }

        for (let i = 0; i < dataDeck[1]['crystal'].length; i++) {
            this.crystal.push(new Crystal(dataCrystal[dataDeck[1]['crystal'][i]]))
        }

        this.fatigue = 0
    }

    adventureEnd() {
        this.adventure = false
    }

    reset() {
        
    }

    loadData() {
        this.level = save.level
        this.exp = save.exp
        this.expMax = expMax[this.level]
        this.gold = save.gold
    }

    saveUpdate() {
        save.level = this.level
        save.exp = this.exp
        save.gold = this.gold
    }
}
