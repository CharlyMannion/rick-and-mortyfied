const { randomise } = require("./utils")

describe('randomise', () => {
    it('returns an empty object if passed an empty array', () => {
        expect(randomise([])).toEqual({});
    })
    it('returns an object when asked to return a random object an array', () => {
        const expected = randomise([{
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/1",
                    "https://rickandmortyapi.com/api/episode/2",
                ],
                "url": "https://rickandmortyapi.com/api/character/1",
                "created": "2017-11-04T18:48:46.250Z"
            },
            {
                "id": 183,
                "name": "Johnny Depp",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-500A)",
                    "url": "https://rickandmortyapi.com/api/location/23"
                },
                "location": {
                    "name": "Earth (C-500A)",
                    "url": "https://rickandmortyapi.com/api/location/23"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/8"
                ],
                "url": "https://rickandmortyapi.com/api/character/183",
                "created": "2017-12-29T18:51:29.693Z"
            }
        ])
        expect(typeof expected).toEqual('object');
    })
    it('returns an object that is in the input array when asked to return a random object an array', () => {
        const inpArr = [{
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-137)",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Earth (Replacement Dimension)",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/1",
                    "https://rickandmortyapi.com/api/episode/2",
                ],
                "url": "https://rickandmortyapi.com/api/character/1",
                "created": "2017-11-04T18:48:46.250Z"
            },
            {
                "id": 183,
                "name": "Johnny Depp",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth (C-500A)",
                    "url": "https://rickandmortyapi.com/api/location/23"
                },
                "location": {
                    "name": "Earth (C-500A)",
                    "url": "https://rickandmortyapi.com/api/location/23"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/8"
                ],
                "url": "https://rickandmortyapi.com/api/character/183",
                "created": "2017-12-29T18:51:29.693Z"
            }
        ];
        const result = randomise(inpArr)
        expect(inpArr).toContain(result);
    })
    it('does not mutate the input', () => {
        const inputArr = [5, 6, 7];
        const inputArrCopy = [5, 6, 7];
        randomise(inputArr);
        expect(inputArr).toEqual(inputArrCopy);
    })
})