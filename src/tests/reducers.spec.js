import reducer from '../reducers'

describe('Default reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
                isLoading: true,
                selectedFilter: 'all',
                data: {
                    all: [],
                    gold: [],
                    silver: [],
                    bronze: []
                }})
    })

    it('should handle RECEIVE_MEDALS', () => {
        expect(
            reducer([], {
                type: "RECEIVE_MEDALS",
                isLoading: false,
                selectedFilter: 'all',
                data: {
                    all: [],
                    gold: [],
                    silver: [],
                    bronze: []
                }
            })
        ).toEqual({
                    type: "RECEIVE_MEDALS",
                    isLoading: false,
                    selectedFilter: 'all',
                    data: {
                        all: [],
                        gold: [],
                        silver: [],
                        bronze: []
                    }})

    })
})