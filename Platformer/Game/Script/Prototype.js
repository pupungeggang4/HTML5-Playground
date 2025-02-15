class Thing {
    position = null
    size = null
}

class Player extends Thing {
    constuctor() {
        this.position = new Vector2D(100, 100)
        this.size = new Vector2D(80, 80)
    }

    render() {
        strokeRect()
    }
}

class Platformer extends Thing {

}