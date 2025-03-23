const dataField = {
    'home_town': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[1200, 640], 'plains_1', [80, 640], true],
        ],
        'thing': [
            {'type': 'save', 'position': [640, 640]}
        ],
        'village': true,
        'monster_spawn': [],
        'monster_id': []
    },

    'plains_1': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[80, 640], 'home_town', [1200, 640], true],
            [[1200, 640], 'plains_2', [80, 640], false]
        ],
        'thing': [],
        'village': false,
        'monster_spawn': [[320, 320], [960, 320], [320, 960], [960, 960]],
        'monster_id': [1, 2, 3],
    },

    'plains_2': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[80, 640], 'plains_1', [1200, 640], false],
            [[1200, 640], 'town_1', [80, 640], true]
        ],
        'thing': [],
        'village': false,
        'monster_spawn': [[320, 320], [960, 320], [320, 960], [960, 960]],
        'monster_id': [1, 2, 3],
    },

    'town_1': {
        'size': [2560, 2560],
        'spawn_point': [640, 640],
        'connection': [
            [[80, 640], 'plains_2', [1200, 640], true],
            [[1920, 80], 'plains_north_1', [640, 1200], true],
            [[1920, 2480], 'plains_south_1', [640, 80], true]
        ],
        'thing': [
            {'type': 'save', 'position': [640, 640]}
        ],
        'village': true,
        'monster_spawn': [],
        'monster_id': [1, 2, 3],
    },

    'plains_north_1': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[640, 1200], 'town_1', [1920, 80], true],
        ],
        'thing': [],
        'village': false,
        'monster_spawn': [[320, 320], [960, 320], [320, 960], [960, 960]],
        'monster_id': [1, 2, 3],
    },

    'plains_south_1': {
        'size': [1280, 1280],
        'spawn_point': [640, 640],
        'connection': [
            [[640, 80], 'town_1', [1920, 2480], true]
        ],
        'thing': [],
        'village': false,
        'monster_spawn': [[320, 320], [960, 320], [320, 960], [960, 960]],
        'monster_id': [1, 2, 3],
    },
}
