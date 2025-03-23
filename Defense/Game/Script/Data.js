const dataCard = {
    1: {'ID': 1, 'energy': 2, 'type': 'unit', 'attack': 10, 'attack_speed': 1,  'weapon': 1, 'hp': 100, 'speed': 0, 'move_style': 'stop', 'play': ['summon']}
}

const dataUnit = {
    1001: {'ID': 1001, 'attack': 5,  'attack_speed': 1,  'weapon': 1, 'hp': 30, 'speed': 40, 'move_style': 'simple'},
}

const dataWeapon = {
    1: {'ID': 1, 'attack': 'random_single', 'range': [20, 0, 160, 80]}
}

const dataLevel = {
    1: {
        'wave': {
            1: [[1, [1001]], [5, [1001, 1001]], [11, [1001, 1001, 1001, 1001]]],
            2: [],
            3: []
        }
    }
}