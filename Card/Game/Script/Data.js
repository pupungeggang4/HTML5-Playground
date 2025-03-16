const dataField = {
    'home_town': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[1200, 640], 'plains_1', [80, 640], true],
        ],
        'thing': [],
        'village': true,
        'monster_spawn': [],
        'monster': []
    },

    'plains_1': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[80, 640], 'home_town', [1200, 640], true]
        ],
        'thing': [],
        'village': false,
        'monster_spawn': [[320, 320], [960, 320], [320, 960], [960, 960]],
        'monster': [],
    },

    'plains_2': {

    },
}
