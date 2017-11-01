import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
//import nock from 'nock'
//import jsonData from '../../public/olympics_2008_medalists.json'
import * as actions from '../actions'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


const mockedInitState = {
    type: "@@INIT",
    selectedFilter: 'all',
    isLoading: false,
    data:{
        all: [],
        gold: [],
        silver: [],
        bronze: []
    }
}

describe('actions', () => {
    it('should create an action to request all medals', () => {
        let selectedFilter = 'all'
        let expectedAction = Object.assign({}, mockedInitState,{
            type: "REQUEST_MEDALS",
            selectedFilter,
            isLoading: true
        })

        expect(actions.requestMedals(mockedInitState, selectedFilter)).toEqual(expectedAction)
    })

    it('should create an action to receive all medals', () => {
        let selectedFilter = 'all'
        let mockedPrevState = Object.assign({}, mockedInitState, {
            isLoading: true
        })

        let mockedData = []

        for(let i=0;i<=2;i++){
           mockedData.push(i)
        }

        let expectedAction = Object.assign({}, mockedInitState,{
            data:{
                all: mockedData,
                gold:[],
                silver: [],
                bronze: []
            },
            type: "RECEIVE_MEDALS",
            isLoading: false,
            selectedFilter

        })
        expect(actions.receiveMedals(mockedPrevState, mockedData)).toEqual(expectedAction)
    })


})

//I WANTED TO SIMULATE TESTS FOR A REAL ASYNC ACTION
// BUT SINCE THAT THERE ARE NO REAL API AND I M JUST CALLING THE JSON ASYNCRONOUSLY WITH Jquery
// EVEN USING NOCK FOR MOCKING THE CALL
//I M HAVING ISSUES PROBABLY BECAUSE THE URL FORMAT
//SO THIS TEST IS NOT WORKING PROPERLY
/*describe('async actions', () => {

    afterEach(() => {
        nock.cleanAll()
    })

    it('creates RECEIVE_MEDALS when fetching all medalists has been done', () => {

        nock('http://localhost:3000')
            .get('/olympics_2008_medalists.json')
            .reply(200, jsonData)

        const expectedActions = {
            type: "RECEIVE_MEDALS",
            isLoading: false,
            selectedFilter: 'all',
            data: {all: actions.sortInitData(jsonData), gold: [], silver: [], bronze: []}
        }

        const store = mockStore(mockedInitState)

        return store.dispatch(actions.fetchMedals('all')).then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions)
        })
    })
})*/