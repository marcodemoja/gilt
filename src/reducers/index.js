const initState = {
  puppiesTabLoading: true,
  kittiesTabLoading: true,
  activeTab: 1,
  puppies: [],
  kitties: [],
  miniPreview: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'API_REQUEST_PUPPIES':
      return Object.assign({}, state, {
        puppiesTabLoading: true,
        puppies: state.puppies || []
      })
    case 'API_SUCCESS_PUPPIES':
      return Object.assign({}, state, {
        puppiesTabLoading: false,
        puppies: action.data
      })
    case 'API_FAIL_PUPPIES':
      return Object.assign({}, state, {
        puppiesTabLoading: false,
        puppies: state.puppies || []
      })
      break
    case 'API_REQUEST_KITTIES':
      return Object.assign({}, state, {
        kittiesTabLoading: true,
        kitties: state.kitties || []
      })
    case 'API_SUCCESS_KITTIES':
      return Object.assign({}, state, {
        kittiesTabLoading: false,
        kitties: action.data
      })
    case 'API_FAIL_KITTIES':
      return Object.assign({}, state, {
        kittiesTabLoading: false,
        kitties: state.puppies || []
      })
      break
    default:
      return state
  }
}
