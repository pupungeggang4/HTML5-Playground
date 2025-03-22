const fileName = 'pupungeggang4:CardRPG'

const emptySave = {
    level: 1,
    exp: 0,
    gold: 50,

    place: 'home_town',

    card: [],
    equipment: [],
    item: [],
}

function saveInit() {
    if (localStorage.getItem(fileName) === null) {
        localStorage.setItem(fileName, JSON.stringify(emptySave))
    }

    save = JSON.parse(localStorage.getItem(fileName))
}

function loadData() {
    save = JSON.parse(localStorage.getItem(fileName))
}

function saveData() {
    localStorage.setItem(fileName, JSON.stringify(save))
}

function eraseData() {
    localStorage.setItem(fileName, JSON.stringify(emptySave))
    save = JSON.parse(localStorage.getItem(fileName))
}