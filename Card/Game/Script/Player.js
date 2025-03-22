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
    }

    adventureInit() {
        this.adventure = true
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
}
