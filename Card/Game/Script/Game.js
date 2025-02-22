class GameManager {
    constructor() {
        player = new Player()
        playerField = new PlayerField()
        battle = new Battle()
        field = new Field()
        field.loadField(dataField['home_town'])
    }

    adventureInit() {
        playerField.rect.position.x = 640
        playerField.rect.position.y = 640
    }
}
